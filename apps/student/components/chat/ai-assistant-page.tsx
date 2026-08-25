"use client";

import { useState } from "react";
import { ChatHistory } from "./chat-history";
import { ChatInterface } from "./chat-interface";

export function AiAssistantPage() {
  const [selectedChatId, setSelectedChatId] = useState("1");
  const [activeUnit, setActiveUnit] = useState("COS40005");

  return (
    <>
      <ChatHistory selectedChatId={selectedChatId} onSelectChat={setSelectedChatId} />
      <ChatInterface activeUnit={activeUnit} onUnitChange={setActiveUnit} />
    </>
  );
}
