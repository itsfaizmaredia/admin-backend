"use client";

import AdminShell from "@/components/AdminShell";
import { StatusBadge } from "@/components/Badge";
import { overview } from "@/lib/mock-data";

export default function Overview() {
  const data = overview;

  return (
    <AdminShell>
      <div className="page narrow">
        <h1 className="pageTitle">Overview</h1>

        <p className="pageSub">
          System summary for Capstone Study Assistant
        </p>

        <div className="statsGrid">
          <div className="statCard blue">
            <div className="statNum">
              {data.totalStudents}
            </div>

            <div className="statLbl">
              Total Students
            </div>
          </div>

          <div className="statCard yellow">
            <div className="statNum">
              {data.pendingRequests}
            </div>

            <div className="statLbl">
              Pending Unit Requests
            </div>
          </div>

          <div className="statCard green">
            <div className="statNum">
              {data.activeUnits}
            </div>

            <div className="statLbl">
              Active Units
            </div>
          </div>

          <div className="statCard purple">
            <div className="statNum">
              {data.totalResources}
            </div>

            <div className="statLbl">
              Total Resources
            </div>
          </div>
        </div>

        <div className="sectionTitleRow">
          <h2 className="sectionTitle">
            Recent Unit Access Requests
          </h2>

          <a
            className="viewAll"
            href="/unit-access-requests"
          >
            View all　›
          </a>
        </div>

        <div className="panel">
          {data.recentRequests.map((request) => (
            <div
              className="requestRow"
              key={request.id}
            >
              <div className="requestIdentity">
                <div className="avatar">
                  {request.name[0]}
                </div>

                <div>
                  <div className="requestName">
                    {request.name}
                  </div>

                  <div className="requestMeta">
                    Requesting {request.requestingUnit}
                    {" · "}
                    {request.requestedAt}
                  </div>
                </div>
              </div>

              <StatusBadge value={request.status} />
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}