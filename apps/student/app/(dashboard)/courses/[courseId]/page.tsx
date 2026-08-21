import { Card } from "@capstone/ui";

interface CourseDetailPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseId } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Course {courseId}</h1>
      <Card title="Course materials">
        <p className="text-gray-600">Course content will appear here.</p>
      </Card>
    </div>
  );
}
