"use client";

import React from "react";
import { Sidebar } from "./Sidebar";

export const Layout = ({
    children,
    onNewChat,
    onHistoryToggle,
    isHistoryOpen,
    theme,
    onThemeToggle
}: {
    children: React.ReactNode,
    onNewChat?: () => void,
    onHistoryToggle?: () => void,
    isHistoryOpen?: boolean,
    theme?: "dark" | "light",
    onThemeToggle?: () => void
}) => {
    return (
        <div className="flex h-screen bg-background overflow-hidden font-sans">
            <Sidebar
                onNewChat={onNewChat}
                onHistoryToggle={onHistoryToggle}
                isHistoryOpen={isHistoryOpen}
                theme={theme}
                onThemeToggle={onThemeToggle}
            />
            <main className="flex-1 relative overflow-hidden flex flex-col">
                {children}
            </main>
        </div>
    );
};
