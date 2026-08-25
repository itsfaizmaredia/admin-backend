import { AppHeader } from "@/components/layout/app-header";
import { StudentSidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white">
      <AppHeader />
      <div className="flex min-h-0 flex-1">
        <StudentSidebar />
        <div className="flex min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
