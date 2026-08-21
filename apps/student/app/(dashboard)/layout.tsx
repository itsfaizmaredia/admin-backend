import { StudentSidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
