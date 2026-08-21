import Link from "next/link";
import { Button, Card } from "@capstone/ui";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Courses</h1>
        <Link href="/courses/new">
          <Button>Create course</Button>
        </Link>
      </div>
      <Card>
        <p className="text-gray-600">No courses created yet.</p>
      </Card>
    </div>
  );
}
