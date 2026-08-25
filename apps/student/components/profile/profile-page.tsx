"use client";

import { FormEvent, useState } from "react";
import { AddIcon, SignOutIcon } from "@/components/icons";
import { useStudent } from "@/lib/student-context";

export function ProfilePageContent() {
  const { profile, approvedUnits, pendingRequests, requestUnitAccess } = useStudent();
  const [unitCode, setUnitCode] = useState("");
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  function handleRequestSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = requestUnitAccess(unitCode);

    if (result.ok) {
      setFeedback({
        type: "success",
        message: "Request sent to your professor for approval.",
      });
      setUnitCode("");
      setShowRequestForm(false);
      return;
    }

    setFeedback({ type: "error", message: result.message });
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-figma-page">
      <div className="border-b border-figma-border bg-white px-6 py-5">
        <h1 className="text-[22px] font-bold text-gray-900">Profile</h1>
        <p className="mt-0.5 text-[13px] text-gray-500">
          Your account and unit enrolment details
        </p>
      </div>

      <div className="px-6 py-5">
        {feedback ? (
          <div
            className={`mb-4 rounded-[8px] px-3 py-2 text-[12px] ${
              feedback.type === "success"
                ? "bg-figma-green-bg text-figma-green-text"
                : "bg-[#FEE2E2] text-[#B91C1C]"
            }`}
          >
            {feedback.message}
          </div>
        ) : null}

        <section className="rounded-[12px] border border-figma-border bg-white p-5 shadow-card">
          <div className="flex items-center gap-3.5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-capstone-red text-lg font-semibold text-white">
              {profile.initials}
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-gray-900">{profile.name}</h2>
              <p className="text-[13px] text-gray-600">{profile.email}</p>
              <p className="text-[13px] text-gray-500">Student ID: {profile.studentId}</p>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[12px] border border-figma-border bg-white p-5 shadow-card">
          <h3 className="mb-3 text-[13px] font-semibold text-gray-900">My Approved Units</h3>
          {approvedUnits.length > 0 ? (
            <ul className="space-y-2">
              {approvedUnits.map((unit) => (
                <li
                  key={unit.code}
                  className="flex items-center justify-between rounded-[8px] bg-figma-green-bg px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-gray-800">
                    <span className="font-semibold">{unit.code}</span>
                    <span className="text-gray-600"> — {unit.name}</span>
                  </p>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-figma-green-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Approved
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[13px] text-gray-500">
              No approved units yet. Request access below.
            </p>
          )}
        </section>

        {pendingRequests.length > 0 ? (
          <section className="mt-4 rounded-[12px] border border-figma-border bg-white p-5 shadow-card">
            <h3 className="mb-3 text-[13px] font-semibold text-gray-900">Pending Requests</h3>
            <ul className="space-y-2">
              {pendingRequests.map((request) => (
                <li
                  key={request.id}
                  className="flex items-center justify-between rounded-[8px] bg-[#FEF3C7] px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-gray-800">
                    <span className="font-semibold">{request.unitCode}</span>
                    <span className="text-gray-600"> — {request.unitName}</span>
                  </p>
                  <span className="text-[11px] font-semibold text-[#B45309]">
                    Awaiting professor approval
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-4 space-y-2.5">
          {showRequestForm ? (
            <form
              onSubmit={handleRequestSubmit}
              className="rounded-[10px] border border-figma-border bg-white p-4 shadow-card"
            >
              <label htmlFor="unit-code" className="block text-[12px] font-medium text-gray-700">
                Unit code
              </label>
              <input
                id="unit-code"
                value={unitCode}
                onChange={(event) => setUnitCode(event.target.value.toUpperCase())}
                placeholder="e.g. COS40007"
                className="mt-1 w-full rounded-[8px] border border-figma-border px-3 py-2 text-[13px] uppercase focus:border-capstone-red focus:outline-none focus:ring-1 focus:ring-capstone-red"
              />
              <div className="mt-3 flex gap-2">
                <button
                  type="submit"
                  className="rounded-[8px] bg-capstone-red px-3 py-2 text-[12px] font-semibold text-white hover:bg-capstone-red-dark"
                >
                  Submit request
                </button>
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="rounded-[8px] border border-figma-border px-3 py-2 text-[12px] font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setShowRequestForm(true)}
              className="flex w-full items-center justify-center gap-1.5 rounded-[10px] border-2 border-dashed border-gray-300 bg-white py-3 text-[13px] font-medium text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              <AddIcon className="text-gray-500" />
              Request Access to Another Unit
            </button>
          )}

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-figma-border bg-white py-3 text-[13px] font-semibold text-capstone-red transition-colors hover:bg-capstone-red-light"
          >
            <SignOutIcon />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
