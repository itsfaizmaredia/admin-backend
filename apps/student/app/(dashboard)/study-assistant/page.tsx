import { Card } from "@capstone/ui";

export default function StudyAssistantPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Study Assistant</h1>
      <Card title="Ask a question">
        <textarea
          className="w-full rounded-lg border border-gray-300 p-3 text-sm"
          rows={4}
          placeholder="What would you like help with?"
        />
      </Card>
    </div>
  );
}
