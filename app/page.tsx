"use client";

import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { InitialView } from "@/components/InitialView";
import { ChatView } from "@/components/ChatView";
import { PreviewPanel } from "@/components/PreviewPanel";
import { CardLibrary } from "@/components/CardLibrary";
import { HistoryPanel } from "@/components/HistoryPanel";

interface Artifact {
  id: string;
  title: string;
  type: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  artifact?: Artifact;
}

export default function Home() {
  const [view, setView] = useState<"initial" | "chat">("initial");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);


  const handleSend = (content: string) => {
    // ... logic ...
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, newMessage]);

    if (view === "initial") {
      setView("chat");
    }

    // Mock AI Response
    setTimeout(() => {
      const isCardRequest = content.toLowerCase().includes("card") ||
        content.toLowerCase().includes("generate") ||
        content.toLowerCase().includes("ui") ||
        content.toLowerCase().includes("preview");

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: isCardRequest
          ? "I've generated some premium card UIs for you. You can see the live preview on the right side."
          : "Hi! How can I help you today?",
        artifact: isCardRequest ? {
          id: "card-ui-1",
          title: "Premium Card Components",
          type: "react-component"
        } : undefined
      };

      setMessages((prev) => [...prev, aiResponse]);

      if (isCardRequest) {
        setIsPreviewOpen(true);
      }
    }, 1000);
  };

  const handleNewChat = () => {
    setMessages([]);
    setView("initial");
    setIsPreviewOpen(false);
  };

  const toggleHistory = () => {
    setIsHistoryOpen((prev) => !prev);
  };

  const handleViewArtifact = (artifactId: string) => {
    setIsPreviewOpen(true);
  };

  return (
    <div className="h-full w-full">
      <Layout
        onNewChat={handleNewChat}
        onHistoryToggle={toggleHistory}
        isHistoryOpen={isHistoryOpen}
      >
        <div className="flex flex-1 overflow-hidden relative">
          <HistoryPanel
            isOpen={isHistoryOpen}
            onClose={() => setIsHistoryOpen(false)}
          />

          <div className="flex-1 flex flex-col min-w-0 transition-all duration-500 ease-in-out">
            {view === "initial" ? (
              <InitialView
                onSend={handleSend}
                onHistoryClick={toggleHistory}
                onNewChat={handleNewChat}
              />
            ) : (
              <ChatView
                messages={messages}
                onSend={handleSend}
                onHistoryClick={toggleHistory}
                onViewArtifact={handleViewArtifact}
                onNewChat={handleNewChat}
              />
            )}
          </div>

          <PreviewPanel
            isOpen={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
            title="Artifacts: Generated UI"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Live Preview</h3>
                <div className="flex gap-1.5 opacity-60">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                </div>
              </div>

              <CardLibrary />
            </div>
          </PreviewPanel>
        </div>
      </Layout>
    </div>
  );
}
