import { Card } from "@capstone/ui";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Courses</h1>
      <Card>
        <p className="text-gray-600">No courses enrolled yet.</p>
      </Card>
    </div>
  );
}
