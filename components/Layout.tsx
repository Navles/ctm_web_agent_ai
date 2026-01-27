"use client";

import React from "react";
import { Sidebar } from "./Sidebar";

export const Layout = ({
    children,
    onNewChat,
    onHistoryToggle,
    isHistoryOpen
}: {
    children: React.ReactNode,
    onNewChat?: () => void,
    onHistoryToggle?: () => void,
    isHistoryOpen?: boolean
}) => {
    return (
        <div className="flex h-screen bg-background overflow-hidden font-sans">
            <Sidebar
                onNewChat={onNewChat}
                onHistoryToggle={onHistoryToggle}
                isHistoryOpen={isHistoryOpen}
            />
            <main className="flex-1 relative overflow-hidden flex flex-col">
                {children}
            </main>
        </div>
    );
};
