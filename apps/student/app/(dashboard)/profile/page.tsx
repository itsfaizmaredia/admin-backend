import { Card } from "@capstone/ui";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <Card title="Account settings">
        <p className="text-gray-600">Manage your student profile here.</p>
      </Card>
    </div>
  );
}
