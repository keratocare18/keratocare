import type { ContactFormData } from "@/lib/admin-storage";

const GOOGLE_SHEETS_WEB_APP_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL?.trim() ||
  "https://script.google.com/macros/s/AKfycbxL2QuoA6l0XhCoiVLK4OuXm8Ie2gk3pweJ8CSp-SeogwkjUimBRivxLnlL8ZHODvo/exec";

export const isGoogleSheetsIntegrationConfigured = (): boolean =>
  GOOGLE_SHEETS_WEB_APP_URL.length > 0;

export const submitContactToGoogleSheets = async (
  data: ContactFormData,
): Promise<boolean> => {
  const payload = JSON.stringify(data);

  try {
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
      body: payload,
    });

    if (response.ok) {
      return true;
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("Google Sheets JSON submit failed; falling back to simple POST.", error);
    }
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      body: payload,
    });

    return response.type === "opaque" || response.ok;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("Google Sheets submit failed.", error);
    }

    return false;
  }
};