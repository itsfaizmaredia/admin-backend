export type AssignmentStatus = "draft" | "published" | "closed";

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  status: AssignmentStatus;
}
