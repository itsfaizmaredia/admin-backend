"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MdChevronRight,
  MdEventNote,
  MdGroups,
  MdStar,
  MdWorkOutline,
} from "react-icons/md";
import { ChatBubbleIcon } from "@/components/icons";
import {
  commonTeamIssues,
  contributorPersonas,
  professionalResources,
  teamSupportAiPrompt,
  type ContributorPersona,
} from "@/lib/team-support-data";

const personaStyles: Record<
  ContributorPersona["tone"],
  { card: string; title: string }
> = {
  passive: {
    card: "bg-[#FEE8EA] border-[#FECACA]",
    title: "text-[#C80F2F]",
  },
  reliable: {
    card: "bg-[#EFF6FF] border-[#BFDBFE]",
    title: "text-[#1D4ED8]",
  },
  proactive: {
    card: "bg-[#ECFDF3] border-[#ABEFC6]",
    title: "text-[#067647]",
  },
};

function buildAiLink(prompt: string) {
  return `/?prompt=${encodeURIComponent(prompt)}`;
}

function ResourceIcon({ type }: { type: (typeof professionalResources)[number]["icon"] }) {
  const className = "h-5 w-5 text-gray-700";
  switch (type) {
    case "meeting":
      return <MdEventNote className={className} aria-hidden />;
    case "behaviour":
      return <MdWorkOutline className={className} aria-hidden />;
    case "star":
      return <MdStar className={className} aria-hidden />;
    case "personas":
      return <MdGroups className={className} aria-hidden />;
  }
}

function AskAiLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-0.5 text-[12px] font-semibold text-capstone-red hover:text-capstone-red-dark"
    >
      {label}
      <MdChevronRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function TeamSupportPageContent() {
  const [openIssueId, setOpenIssueId] = useState<string | null>(null);

  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-figma-page">
      <div className="border-b border-figma-border bg-white px-6 py-5">
        <h1 className="text-[22px] font-bold text-gray-900">Team Support</h1>
        <p className="mt-0.5 text-[13px] text-gray-500">
          Guidance for managing teamwork throughout your Capstone project
        </p>
      </div>

      <div className="space-y-4 px-6 py-5">
        <section className="rounded-[12px] border border-figma-border bg-white p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[14px] font-semibold text-gray-900">Team Contribution Guidance</h2>
            <AskAiLink
              href={buildAiLink("Tell me about team contribution personas in Capstone.")}
              label="Ask AI About This"
            />
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {contributorPersonas.map((persona) => (
              <article
                key={persona.id}
                className={`rounded-[10px] border p-4 ${personaStyles[persona.tone].card}`}
              >
                <div className="mb-2 text-[18px]">{persona.emoji}</div>
                <h3 className={`text-[13px] font-semibold ${personaStyles[persona.tone].title}`}>
                  {persona.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.55] text-gray-600">{persona.description}</p>
                <Link
                  href={buildAiLink(persona.aiPrompt)}
                  className="mt-3 inline-flex items-center gap-0.5 text-[11px] font-medium text-gray-700 hover:text-capstone-red"
                >
                  {persona.linkLabel}
                  <MdChevronRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[12px] border border-figma-border bg-white p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[14px] font-semibold text-gray-900">Common Team Issues</h2>
            <AskAiLink href={buildAiLink(teamSupportAiPrompt)} label="Ask AI" />
          </div>

          <ul className="space-y-2">
            {commonTeamIssues.map((issue) => {
              const open = openIssueId === issue.id;
              return (
                <li key={issue.id}>
                  <button
                    type="button"
                    onClick={() => setOpenIssueId(open ? null : issue.id)}
                    className="flex w-full items-center justify-between rounded-[8px] border border-figma-border bg-white px-4 py-3 text-left transition-colors hover:bg-gray-50"
                  >
                    <span className="text-[13px] font-medium text-gray-800">{issue.question}</span>
                    <MdChevronRight
                      className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                        open ? "rotate-90" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {open ? (
                    <div className="mt-2 rounded-[8px] bg-figma-page px-4 py-3">
                      <p className="text-[12px] text-gray-600">
                        Ask the AI assistant for guidance tailored to your unit context.
                      </p>
                      <Link
                        href={buildAiLink(issue.aiPrompt)}
                        className="mt-2 inline-flex text-[12px] font-semibold text-capstone-red hover:text-capstone-red-dark"
                      >
                        Ask AI about this
                      </Link>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="rounded-[12px] border border-figma-border bg-white p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[14px] font-semibold text-gray-900">Professional Communication</h2>
            <AskAiLink
              href={buildAiLink("Help me with professional communication in Capstone.")}
              label="Ask AI"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {professionalResources.map((resource) => (
              <Link
                key={resource.id}
                href="/unit-resources"
                className="flex items-center justify-between rounded-[10px] border border-figma-border bg-white px-4 py-3 transition-colors hover:border-capstone-red hover:bg-capstone-red-light/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-gray-50">
                    <ResourceIcon type={resource.icon} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900">{resource.title}</p>
                    <p className="text-[11px] text-gray-500">{resource.subtitle}</p>
                  </div>
                </div>
                <MdChevronRight className="h-4 w-4 text-gray-400" aria-hidden />
              </Link>
            ))}
          </div>
        </section>

        <Link
          href={buildAiLink(teamSupportAiPrompt)}
          className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-capstone-red px-4 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-capstone-red-dark"
        >
          <ChatBubbleIcon className="h-4 w-4" />
          Ask AI About Team Issues
        </Link>
      </div>
    </div>
  );
}
