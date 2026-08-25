import type { Assignment } from "@capstone/types";

export const assignments: Assignment[] = [
  {
    id: "1",
    unitCode: "COS40005",
    title: "Project Proposal",
    description: "Submit your initial project proposal including scope, team roles, and timeline.",
    dueDate: "2026-09-05",
    required: true,
    status: "published",
  },
  {
    id: "2",
    unitCode: "COS40005",
    title: "Week 3 Progress Report",
    description: "Brief update on milestones achieved and blockers for supervisor review.",
    dueDate: "2026-09-12",
    required: true,
    status: "published",
  },
  {
    id: "3",
    unitCode: "COS40005",
    title: "Client Meeting Reflection",
    description: "Optional reflection on your first client meeting and action items.",
    dueDate: "2026-09-20",
    required: false,
    status: "published",
  },
  {
    id: "4",
    unitCode: "COS40006",
    title: "Sprint 1 Deliverables",
    description: "Upload sprint backlog, completed stories, and retrospective notes.",
    dueDate: "2026-09-08",
    required: true,
    status: "published",
  },
  {
    id: "5",
    unitCode: "COS40006",
    title: "Final Presentation Slides",
    description: "Draft slides for the end-of-semester project presentation.",
    dueDate: "2026-10-15",
    required: true,
    status: "published",
  },
];

export const unitFilters = ["All My Units", "COS40005", "COS40006"] as const;
export type UnitFilter = (typeof unitFilters)[number];

export type DueStatus = "upcoming" | "due-soon" | "overdue";

export function getDueStatus(dueDate: string, today = new Date()): DueStatus {
  const due = new Date(`${dueDate}T23:59:59`);
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysUntilDue = Math.ceil((due.getTime() - today.getTime()) / msPerDay);

  if (daysUntilDue < 0) return "overdue";
  if (daysUntilDue <= 7) return "due-soon";
  return "upcoming";
}

export function formatDueDate(dueDate: string): string {
  return new Date(`${dueDate}T12:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
