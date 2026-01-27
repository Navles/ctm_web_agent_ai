"use client";

import React, { useState } from "react";
import { Plus, History, ChevronDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputBarProps {
    className?: string;
    onSend?: (message: string) => void;
    isInitial?: boolean;
    onHistoryClick?: () => void;
    onNewChat?: () => void;
}

export const InputBar = ({
    className,
    onSend,
    isInitial = false,
    onHistoryClick,
    onNewChat
}: InputBarProps) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSend?.(message);
            setMessage("");
        }
    };

    return (
        <div className={cn(
            "w-full max-w-3xl mx-auto transition-all duration-500 ease-in-out",
            isInitial ? "mb-6" : "pb-4",
            className
        )}>
            <div className="relative glass-card premium-shadow border border-border bg-card p-3 min-h-[120px] flex flex-col">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isInitial ? "How can I help you today?" : "Reply..."}
                    className="flex-1 bg-transparent border-none outline-none resize-none text-foreground placeholder:text-muted-foreground py-2 px-1 text-sm"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />

                <div className="flex items-center justify-between mt-2 pt-2">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onNewChat}
                            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                        >
                            <Plus size={20} />
                        </button>
                        <button
                            onClick={onHistoryClick}
                            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                        >
                            <History size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleSend}
                            disabled={!message.trim()}
                            className={cn(
                                "p-2 rounded-lg transition-all duration-300",
                                message.trim()
                                    ? "bg-accent text-white"
                                    : "bg-secondary text-muted-foreground cursor-not-allowed"
                            )}
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
