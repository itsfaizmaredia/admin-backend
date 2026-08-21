import { Card } from "@capstone/ui";

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Study Content</h1>
      <Card title="Manage materials">
        <p className="text-gray-600">Upload and organize study materials here.</p>
      </Card>
    </div>
  );
}
