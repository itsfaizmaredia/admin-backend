import type { Assignment } from "@capstone/types";
import type { DueStatus } from "@/lib/assignments-data";

const dueStatusStyles: Record<DueStatus, string> = {
  upcoming: "bg-gray-100 text-gray-700",
  "due-soon": "bg-[#FEF3C7] text-[#B45309]",
  overdue: "bg-[#FEE2E2] text-[#B91C1C]",
};

const dueStatusLabels: Record<DueStatus, string> = {
  upcoming: "Upcoming",
  "due-soon": "Due soon",
  overdue: "Overdue",
};

interface AssignmentCardProps {
  assignment: Assignment;
  dueStatus: DueStatus;
  formattedDueDate: string;
}

export function AssignmentCard({
  assignment,
  dueStatus,
  formattedDueDate,
}: AssignmentCardProps) {
  return (
    <article className="rounded-[12px] border border-figma-border bg-white p-4 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-[13px] font-semibold text-gray-900">{assignment.title}</h3>
            {assignment.required && (
              <span className="rounded-[4px] bg-capstone-red-chip px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-capstone-red">
                Required
              </span>
            )}
          </div>
          <p className="text-[11px] font-medium text-gray-500">{assignment.unitCode}</p>
          <p className="mt-2 text-[12px] leading-[1.5] text-gray-600">{assignment.description}</p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${dueStatusStyles[dueStatus]}`}
          >
            {dueStatusLabels[dueStatus]}
          </span>
          <p className="text-[12px] font-semibold text-gray-900">Due {formattedDueDate}</p>
        </div>
      </div>
    </article>
  );
}
