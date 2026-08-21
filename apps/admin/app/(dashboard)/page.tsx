import { Card } from "@capstone/ui";

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of your courses and students</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Total Courses">
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card title="Enrolled Students">
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card title="Active Assignments">
          <p className="text-3xl font-bold">0</p>
        </Card>
      </div>
    </div>
  );
}
