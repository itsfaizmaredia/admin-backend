import { Card } from "@capstone/ui";

export default function AssignmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Assignments</h1>
      <Card>
        <p className="text-gray-600">No assignments due.</p>
      </Card>
    </div>
  );
}
