"use client";

import { useRef, useEffect } from "react";
import { InputBar } from "./InputBar";
import { SquareTerminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { StarterCards } from "./StarterCards";

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

export const ChatView = ({
    messages,
    onSend,
    onHistoryClick,
    onViewArtifact,
    onNewChat
}: {
    messages: Message[],
    onSend: (msg: string) => void,
    onHistoryClick?: () => void,
    onViewArtifact?: (artifactId: string) => void,
    onNewChat?: () => void
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 flex flex-col h-full relative">
            <header className="h-14 border-b border-border flex items-center px-6 sticky top-0 bg-background/80 backdrop-blur-md z-10">
                <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium cursor-pointer hover:text-zinc-200 transition-colors">
                    Greeting
                </div>
            </header>

            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-6 py-8 space-y-8 scroll-smooth"
            >
                <div className="max-w-5xl mx-auto w-full space-y-8 pb-48">
                    {/* Persistent Starter Cards */}
                    <StarterCards onSend={onSend} />

                    <div className="max-w-3xl mx-auto space-y-12">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500",
                                    msg.role === "user" ? "justify-end" : "justify-start"
                                )}
                            >
                                {msg.role === "user" ? (
                                    <>
                                        <div className="bg-zinc-900 border border-white/5 px-4 py-2.5 rounded-2xl text-zinc-200 max-w-[85%] text-sm premium-shadow order-1">
                                            {msg.content}
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 order-2 border border-white/5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center shrink-0 border border-white/5 mt-1">
                                            <img
                                                src="/ctm-01.png"
                                                alt="Bot"
                                                className="w-5 h-5 object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 max-w-[85%]">
                                            <div className="text-zinc-100 text-[15px] leading-relaxed font-serif pt-1.5">
                                                {msg.content}
                                            </div>

                                            {msg.artifact && (
                                                <div
                                                    onClick={() => onViewArtifact?.(msg.artifact!.id)}
                                                    className="flex items-center gap-4 bg-zinc-900/50 border border-border p-4 rounded-xl cursor-pointer hover:bg-zinc-800 transition-all group w-fit mt-2"
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                                        <SquareTerminal size={20} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-zinc-200">{msg.artifact.title}</span>
                                                        <span className="text-xs text-zinc-500">Click to view artifact</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <div ref={messagesEndRef} className="h-px w-full" />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-6 backdrop-gradient-to-t from-background via-background/90 to-transparent pt-10 pb-6 z-20">
                <InputBar
                    onSend={onSend}
                    onHistoryClick={onHistoryClick}
                    onNewChat={onNewChat}
                />
                <div className="text-center mt-3">
                    <p className="text-[11px] text-zinc-500 font-medium opacity-60">
                        AI can make mistakes. Please double-check responses.
                    </p>
                </div>
            </div>
        </div>
    );
};
