import { Card } from "@capstone/ui";
import Link from "next/link";

interface CourseDetailPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseId } = await params;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Course {courseId}</h1>
        <Link
          href={`/courses/${courseId}/students`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View students
        </Link>
      </div>
      <Card title="Course details">
        <p className="text-gray-600">Course management content will appear here.</p>
      </Card>
    </div>
  );
}
