import { Card } from "@capstone/ui";

interface CourseStudentsPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseStudentsPage({ params }: CourseStudentsPageProps) {
  const { courseId } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Students — Course {courseId}</h1>
      <Card>
        <p className="text-gray-600">No students enrolled yet.</p>
      </Card>
    </div>
  );
}
