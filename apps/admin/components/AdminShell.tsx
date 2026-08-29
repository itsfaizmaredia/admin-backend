"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "./Icons";

const items = [
  ["/", "Overview", "overview"],
  ["/students", "Students", "students"],
  [
    "/unit-access-requests",
    "Unit Access Requests",
    "requests",
  ],
  [
    "/unit-resources",
    "Unit Resources",
    "resources",
  ],
  [
    "/admin-management",
    "Admin Management",
    "shield",
  ],
] as const;

export default function AdminShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brandBlock">
          <div className="logoBox">CS</div>

          <div>
            <div className="brandName">
              Capstone
            </div>

            <div className="brandTag">
              STUDY ASSISTANT
            </div>
          </div>
        </div>

        <div className="portalLabel">
          ADMIN PORTAL
        </div>

        <nav className="menu">
          {items.map(
            ([href, label, icon]) => (
              <Link
                href={href}
                key={href}
                className={`menuItem ${
                  pathname === href
                    ? "active"
                    : ""
                }`}
              >
                <span className="menuIcon">
                  <Icon
                    name={icon}
                    size={23}
                  />
                </span>

                <span>{label}</span>

                {href ===
                  "/unit-access-requests" && (
                  <span className="sideBadge">
                    1
                  </span>
                )}
              </Link>
            )
          )}
        </nav>

        <div className="sidebarUser">
          <div className="avatar dark">
            D
          </div>

          <div>
            <div className="sideUserName">
              Dr. Sarah Mitchell
            </div>

            <div className="sideUserRole">
              Admin
            </div>
          </div>

          <div className="privacy">
            Do not sell or share my personal info
          </div>
        </div>
      </aside>

      <main className="content">
        {children}
      </main>
    </div>
  );
}