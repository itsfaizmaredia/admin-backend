import { Card } from "@capstone/ui";

export default function StudentHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-600">Your study dashboard</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Active Courses">
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card title="Pending Assignments">
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card title="Study Sessions">
          <p className="text-3xl font-bold">0</p>
        </Card>
      </div>
    </div>
  );
}
