"use client";

import { AddIcon } from "@/components/icons";

const recentChats = [
  { id: "1", title: "Week 1 tasks", date: "Today" },
  { id: "2", title: "Supervisor meeting prep", date: "Yesterday" },
  { id: "3", title: "Passive contributor issue", date: "17 Aug" },
  { id: "4", title: "Submission templates", date: "15 Aug" },
];

interface ChatHistoryProps {
  selectedChatId: string;
  onSelectChat: (id: string) => void;
}

export function ChatHistory({ selectedChatId, onSelectChat }: ChatHistoryProps) {
  return (
    <aside className="flex w-[196px] shrink-0 flex-col border-r border-capstone-border bg-white">
      <div className="p-2.5">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-[8px] bg-capstone-red px-3 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-capstone-red-dark"
        >
          <AddIcon className="text-base" />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 pb-4">
        <p className="mb-1.5 px-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
          Recent
        </p>
        <ul className="space-y-0.5">
          {recentChats.map((chat) => {
            const selected = selectedChatId === chat.id;
            return (
              <li key={chat.id}>
                <button
                  type="button"
                  onClick={() => onSelectChat(chat.id)}
                  className={`w-full rounded-[6px] px-2 py-1.5 text-left transition-colors ${
                    selected
                      ? "border-l-2 border-capstone-red bg-capstone-red-light pl-[6px]"
                      : "border-l-2 border-transparent hover:bg-gray-50"
                  }`}
                >
                  <p
                    className={`truncate text-[13px] font-medium leading-tight ${
                      selected ? "text-capstone-red" : "text-gray-800"
                    }`}
                  >
                    {chat.title}
                  </p>
                  <p className="text-[10px] text-gray-400">{chat.date}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
