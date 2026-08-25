"use client";

import { useMemo, useState } from "react";
import {
  assignments,
  formatDueDate,
  getDueStatus,
  unitFilters,
  type UnitFilter,
} from "@/lib/assignments-data";
import { useStudent } from "@/lib/student-context";
import { AssignmentCard } from "./assignment-card";

export function AssignmentsPageContent() {
  const { approvedUnitCodes } = useStudent();
  const [unitFilter, setUnitFilter] = useState<UnitFilter>("All My Units");

  const availableUnitFilters = unitFilters.filter(
    (unit) => unit === "All My Units" || approvedUnitCodes.includes(unit),
  );

  const visibleAssignments = useMemo(() => {
    return assignments
      .filter((assignment) => approvedUnitCodes.includes(assignment.unitCode))
      .filter((assignment) => {
        if (unitFilter === "All My Units") return true;
        return assignment.unitCode === unitFilter;
      })
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  }, [approvedUnitCodes, unitFilter]);

  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-white">
      <div className="border-b border-figma-border px-6 py-5">
        <h1 className="text-[22px] font-bold text-gray-900">Assignments</h1>
        <p className="mt-0.5 text-[13px] text-gray-500">
          Due dates and requirements for your approved units
        </p>

        {approvedUnitCodes.length > 0 ? (
          <div className="mt-3 flex gap-1.5">
            {availableUnitFilters.map((unit) => {
              const active = unitFilter === unit;
              return (
                <button
                  key={unit}
                  type="button"
                  onClick={() => setUnitFilter(unit)}
                  className={`rounded-full px-3 py-1 text-[12px] font-semibold transition-colors ${
                    active
                      ? "bg-capstone-red text-white"
                      : "border border-capstone-red bg-white text-capstone-red hover:bg-capstone-red-light"
                  }`}
                >
                  {unit}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="bg-figma-page px-6 py-5">
        {approvedUnitCodes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-[13px] font-medium text-gray-900">No approved units</p>
            <p className="mt-1 text-[13px] text-gray-500">
              Request access from Profile. Assignments appear after professor approval.
            </p>
          </div>
        ) : visibleAssignments.length > 0 ? (
          <div className="space-y-3">
            {visibleAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                dueStatus={getDueStatus(assignment.dueDate)}
                formattedDueDate={formatDueDate(assignment.dueDate)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-[13px] font-medium text-gray-900">No assignments found</p>
            <p className="mt-1 text-[13px] text-gray-500">Try selecting a different unit filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
