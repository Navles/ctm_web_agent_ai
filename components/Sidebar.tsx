"use client";

import React from "react";
import {
    PanelLeft,
    Plus,
    MessageSquare,
    Box,
    Library,
    Briefcase,
    Code2,
    UserCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const SidebarItem = ({
    icon: Icon,
    active = false,
    onClick
}: {
    icon: any,
    active?: boolean,
    onClick?: () => void
}) => (
    <button
        onClick={onClick}
        className={cn(
            "p-2.5 rounded-xl transition-all duration-200 group relative",
            active ? "sidebar-icon-active" : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"
        )}
    >
        <Icon size={24} strokeWidth={1.5} />
        {active && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-accent rounded-r-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
        )}
    </button>
);

export const Sidebar = ({
    onNewChat,
    onHistoryToggle,
    isHistoryOpen
}: {
    onNewChat?: () => void,
    onHistoryToggle?: () => void,
    isHistoryOpen?: boolean
}) => {
    return (
        <aside className="w-[72px] h-screen bg-sidebar border-r border-border flex flex-col items-center py-6 gap-8 shrink-0 z-50">
            <div className="flex flex-col items-center gap-6">
                <button
                    onClick={onHistoryToggle}
                    className={cn(
                        "p-2 transition-colors",
                        isHistoryOpen ? "text-white" : "text-zinc-400 hover:text-white"
                    )}
                >
                    <PanelLeft size={24} strokeWidth={1.5} />
                </button>
                <button
                    onClick={onNewChat}
                    className="w-12 h-12 rounded-full border border-border/50 bg-zinc-800/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-300"
                >
                    <Plus size={24} strokeWidth={1.5} />
                </button>
            </div>
        </aside >
    );
};
