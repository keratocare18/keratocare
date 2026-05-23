import { useEffect, useState } from "react";
import {
  Calendar,
  Download,
  Mail,
  RefreshCw,
  Phone,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  autoDownloadAdminExcel,
  clearOldMessages,
  getAdminStats,
  getStoredMessages,
  type AdminStats,
  type StoredMessage,
  type TopCondition,
} from "@/lib/admin-storage";

const ADMIN_ENABLED =
  import.meta.env.DEV || import.meta.env.VITE_ENABLE_ADMIN_PANEL === "true";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PANEL_PASSWORD;

const AdminPanel = () => {
  const [messages, setMessages] = useState<StoredMessage[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [isAuthed, setIsAuthed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthed) {
      refreshData();
    }
  }, [isAuthed]);

  const refreshData = () => {
    setMessages(getStoredMessages());
    setStats(getAdminStats());
  };

  const handleAuth = () => {
    if (!ADMIN_ENABLED) {
      toast.error("Admin tools are disabled in this deployment.");
      return;
    }

    if (!ADMIN_PASSWORD) {
      toast.error("Admin password is not configured.");
      return;
    }

    if (password === ADMIN_PASSWORD) {
      setIsAuthed(true);
      setPassword("");
      return;
    }

    toast.error("Incorrect password.");
  };

  const handleDownload = () => {
    autoDownloadAdminExcel();
    toast.success(`Downloaded ${messages.length} contact records.`);
  };

  const handleClearOld = () => {
    const deleted = clearOldMessages(30);
    refreshData();
    toast.success(`Cleared ${deleted} messages older than 30 days.`);
  };

  if (!ADMIN_ENABLED) {
    return (
      <Card className="mx-auto max-w-2xl p-8 text-center shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Admin Tools Disabled
        </h2>
        <p className="text-sm leading-6 text-slate-600">
          The local admin dashboard is intentionally disabled for public Vercel
          deployments. Enable it only for controlled internal environments with
          a build-time password.
        </p>
      </Card>
    );
  }

  if (!ADMIN_PASSWORD) {
    return (
      <Card className="mx-auto max-w-2xl p-8 text-center shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Admin Setup Required
        </h2>
        <p className="text-sm leading-6 text-slate-600">
          Set <code>VITE_ADMIN_PANEL_PASSWORD</code> before using this route.
        </p>
      </Card>
    );
  }

  if (!isAuthed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            KeratoCare Admin
          </h2>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleAuth();
                }
              }}
              className="w-full rounded-lg border px-3 py-2"
            />
            <Button onClick={handleAuth} className="w-full">
              Access Admin Panel
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">KeratoCare Admin Panel</h1>
          <div className="flex space-x-3">
            <Button onClick={refreshData} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button onClick={handleDownload} className="bg-green-600">
              <Download className="mr-2 h-4 w-4" />
              Download Excel
            </Button>
            <Button onClick={handleClearOld} variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Old
            </Button>
          </div>
        </div>

        {stats ? (
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            <Card className="p-6">
              <div className="flex items-center">
                <Users className="mr-3 h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Total Contacts</p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <Calendar className="mr-3 h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Today</p>
                  <p className="text-2xl font-bold">{stats.today}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <TrendingUp className="mr-3 h-8 w-8 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-600">This Week</p>
                  <p className="text-2xl font-bold">{stats.thisWeek}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <Mail className="mr-3 h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-600">Latest Message</p>
                  <p className="text-sm font-medium">
                    {stats.latestMessage
                      ? new Date(stats.latestMessage.timestamp).toLocaleDateString()
                      : "No messages"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ) : null}

        {stats?.topConditions.length ? (
          <Card className="mb-8 p-6">
            <h3 className="mb-4 text-lg font-semibold">Top Conditions</h3>
            <div className="flex flex-wrap gap-2">
              {stats.topConditions.map(({ condition, count }: TopCondition) => (
                <Badge key={condition} variant="secondary">
                  {condition}: {count}
                </Badge>
              ))}
            </div>
          </Card>
        ) : null}

        <Card className="overflow-hidden">
          <div className="border-b p-6">
            <h3 className="text-lg font-semibold">All Contact Messages</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Condition
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages
                  .slice()
                  .reverse()
                  .map((message) => (
                    <tr key={message.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        {new Date(message.timestamp).toLocaleDateString()}
                        <br />
                        <span className="text-xs text-gray-500">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {message.name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <div className="flex flex-col space-y-1">
                          <a
                            href={`mailto:${message.email}`}
                            className="flex items-center text-blue-600 hover:underline"
                          >
                            <Mail className="mr-1 h-3 w-3" />
                            {message.email}
                          </a>
                          <a
                            href={`tel:${message.phone}`}
                            className="flex items-center text-green-600 hover:underline"
                          >
                            <Phone className="mr-1 h-3 w-3" />
                            {message.phone}
                          </a>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Badge variant="outline">
                          {message.condition || "Not specified"}
                        </Badge>
                      </td>
                      <td className="max-w-xs px-6 py-4 text-sm text-gray-900">
                        <p className="truncate">{message.message || "No message"}</p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Card>

        {messages.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            No messages found. Contacts will appear here after form submissions.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AdminPanel;
