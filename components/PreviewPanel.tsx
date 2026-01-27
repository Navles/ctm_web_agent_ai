"use client";

import React, { useState } from "react";
import { X, Code, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PreviewPanelProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export const PreviewPanel = ({ isOpen, onClose, title = "Preview", children }: PreviewPanelProps) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    return (
        <div className={cn(
            "border-l border-border bg-[#0a0a0a] transition-all duration-500 ease-in-out flex flex-col shrink-0 overflow-hidden",
            isFullScreen
                ? "fixed inset-0 z-50 w-full h-full border-none"
                : cn("h-full relative", isOpen ? "w-[45%] opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-10")
        )}>
            <header className="h-14 flex items-center justify-between px-5 border-b border-border bg-black/40 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-2.5 py-1 bg-zinc-800/50 rounded-lg text-xs font-semibold text-zinc-300 border border-white/5">
                        <Code size={10} className="text-accent" />
                        Artifacts
                    </div>
                    <h2 className="text-sm font-semibold text-zinc-200">{title}</h2>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setIsFullScreen(!isFullScreen)}
                        className="p-2 text-zinc-500 hover:text-white transition-colors hover:bg-zinc-800 rounded-lg"
                    >
                        {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    </button>
                    <div className="w-px h-5 bg-zinc-800 mx-2" />
                    <button
                        onClick={() => {
                            setIsFullScreen(false);
                            onClose();
                        }}
                        className="p-2 text-zinc-500 hover:text-white transition-colors hover:bg-zinc-800 rounded-lg"
                    >
                        <X size={18} />
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 bg-dots-pattern custom-scrollbar">
                <div className="max-w-4xl mx-auto h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};
