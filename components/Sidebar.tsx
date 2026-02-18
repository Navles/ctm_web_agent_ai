"use client";

import React from "react";
import {
    PanelLeft,
    Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../themeToggle";

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
            active ? "sidebar-icon-active" : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
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
                        isHistoryOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    <PanelLeft size={24} strokeWidth={1.5} />
                </button>
                <button
                    onClick={onNewChat}
                    className="w-12 h-12 rounded-full border border-border/50 bg-secondary/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary/20 transition-all duration-300"
                >
                    <Plus size={24} strokeWidth={1.5} />
                </button>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Theme toggle at bottom */}
            <div className="flex flex-col items-center gap-4">
                <ThemeToggle />
                {/* <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-muted-foreground text-xs font-medium hover:bg-secondary/40 transition-colors cursor-pointer ring-1 ring-border">
                    U
                </div> */}
            </div>
        </aside >
    );
};