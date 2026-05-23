import AdminPanel from "@/components/AdminPanel";

const Admin = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">KeratoCare - Admin</h1>
          <p className="text-sm text-gray-600">Internal admin tools for controlled environments</p>
        </header>

        <AdminPanel />
      </div>
    </main>
  );
};

export default Admin;
