import { Card } from "@capstone/ui";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <Card title="Account">
        <p className="text-gray-600">Manage your professor account settings.</p>
      </Card>
    </div>
  );
}
