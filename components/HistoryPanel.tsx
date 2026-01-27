"use client";

import React from "react";
import { X, MessageSquare, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HistoryPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HistoryPanel = ({ isOpen, onClose }: HistoryPanelProps) => {
    const dummyHistory = [
        { id: 1, title: "Flight Status Dashboard", time: "2m ago" },
        { id: 2, title: "Coffee Shop Menu", time: "2h ago" },
        { id: 3, title: "User Profile Card", time: "1d ago" },
        { id: 4, title: "Project Task List", time: "2d ago" },
        { id: 5, title: "Authentication Flow", time: "3d ago" },
        { id: 6, title: "Analytics Chart", time: "1w ago" },
    ];

    return (
        <div className={cn(
            "h-full border-r border-border bg-[#0a0a0a] transition-all duration-500 ease-in-out flex flex-col shrink-0 overflow-hidden",
            isOpen ? "w-[300px] opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-10"
        )}>
            <header className="h-16 flex items-center justify-between px-4 border-b border-border shrink-0">
                <h2 className="text-sm font-semibold text-zinc-200 pl-2">Chat History</h2>
                <button
                    onClick={onClose}
                    className="p-2 text-zinc-500 hover:text-white transition-colors hover:bg-zinc-800 rounded-lg"
                >
                    <X size={20} />
                </button>
            </header>

            <div className="p-4 border-b border-border">
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search chats..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-9 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
                <div className="space-y-1">
                    {dummyHistory.map((item) => (
                        <button
                            key={item.id}
                            className="w-full flex flex-col gap-1 p-3 rounded-lg hover:bg-zinc-900 transition-colors text-left group"
                        >
                            <div className="text-sm text-zinc-300 font-medium truncate group-hover:text-white transition-colors">
                                {item.title}
                            </div>
                            <div className="text-xs text-zinc-600">
                                {item.time}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
