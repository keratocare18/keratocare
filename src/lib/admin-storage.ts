const ADMIN_MESSAGES_STORAGE_KEY = "keratocare_admin_messages";

const devLog = (...args: unknown[]) => {
  if (import.meta.env.DEV) {
    console.log(...args);
  }
};

const devError = (...args: unknown[]) => {
  if (import.meta.env.DEV) {
    console.error(...args);
  }
};

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  condition?: string;
  message?: string;
}

export interface StoredMessage extends ContactFormData {
  id: string;
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface TopCondition {
  condition: string;
  count: number;
}

export interface AdminStats {
  total: number;
  today: number;
  thisWeek: number;
  topConditions: TopCondition[];
  latestMessage: StoredMessage | null;
}

export function storeMessageSilently(data: ContactFormData): StoredMessage {
  const timestamp = new Date().toISOString();
  const id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;

  const storedMessage: StoredMessage = {
    ...data,
    id,
    timestamp,
    ipAddress: "Not available",
    userAgent: navigator.userAgent,
  };

  try {
    const existingMessages = getStoredMessages();
    existingMessages.push(storedMessage);

    localStorage.setItem(
      ADMIN_MESSAGES_STORAGE_KEY,
      JSON.stringify(existingMessages),
    );
    localStorage.setItem(`keratocare_msg_${id}`, JSON.stringify(storedMessage));

    devLog("Admin message stored:", id);
    return storedMessage;
  } catch (error) {
    devError("Failed to store admin message:", error);
    return storedMessage;
  }
}

export function getStoredMessages(): StoredMessage[] {
  try {
    const messages = localStorage.getItem(ADMIN_MESSAGES_STORAGE_KEY);
    return messages ? (JSON.parse(messages) as StoredMessage[]) : [];
  } catch (error) {
    devError("Failed to retrieve stored messages:", error);
    return [];
  }
}

export function generateAdminCSV(): string {
  const messages = getStoredMessages();

  const headers = [
    "ID",
    "Timestamp",
    "Name",
    "Email",
    "Phone",
    "Condition",
    "Message",
    "User Agent",
  ];

  const escapeCSV = (value: string) => {
    if (value.includes(",") || value.includes("\"") || value.includes("\n")) {
      return `"${value.replace(/"/g, "\"\"")}"`;
    }
    return value || "";
  };

  const csvRows = messages.map((message) =>
    [
      message.id,
      new Date(message.timestamp).toLocaleString(),
      message.name,
      message.email,
      message.phone,
      message.condition || "Not specified",
      message.message || "No message",
      message.userAgent || "Unknown",
    ]
      .map(escapeCSV)
      .join(","),
  );

  return `${headers.join(",")}\n${csvRows.join("\n")}`;
}

export function autoDownloadAdminExcel(): void {
  const messages = getStoredMessages();

  if (messages.length === 0) {
    return;
  }

  const csvContent = generateAdminCSV();
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
  const filename = `keratocare-admin-contacts-${timestamp}.csv`;

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    devLog(`Admin export downloaded: ${filename}`);
  }
}

export function generateWhatsAppMessage(data: ContactFormData): string {
  return `Hi KeratoCare!

I'm interested in your services:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Condition: ${data.condition || "Not specified"}

${data.message ? `Message: ${data.message}\n\n` : ""}Please contact me for a consultation.

Thank you!`;
}

export function clearOldMessages(daysOld = 30): number {
  const messages = getStoredMessages();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysOld);

  const recentMessages = messages.filter(
    (message) => new Date(message.timestamp) > cutoffDate,
  );
  const deletedCount = messages.length - recentMessages.length;

  localStorage.setItem(
    ADMIN_MESSAGES_STORAGE_KEY,
    JSON.stringify(recentMessages),
  );

  devLog(`Admin cleanup removed ${deletedCount} old messages.`);
  return deletedCount;
}

export function getAdminStats(): AdminStats {
  const messages = getStoredMessages();
  const today = new Date().toDateString();
  const thisWeek = new Date();
  thisWeek.setDate(thisWeek.getDate() - 7);

  return {
    total: messages.length,
    today: messages.filter(
      (message) => new Date(message.timestamp).toDateString() === today,
    ).length,
    thisWeek: messages.filter(
      (message) => new Date(message.timestamp) > thisWeek,
    ).length,
    topConditions: getTopConditions(messages),
    latestMessage: messages.at(-1) ?? null,
  };
}

function getTopConditions(messages: StoredMessage[]): TopCondition[] {
  const conditions: Record<string, number> = {};

  messages.forEach((message) => {
    const condition = message.condition || "Not specified";
    conditions[condition] = (conditions[condition] || 0) + 1;
  });

  return Object.entries(conditions)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5)
    .map(([condition, count]) => ({ condition, count }));
}
