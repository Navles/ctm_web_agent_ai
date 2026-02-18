"use client";

import React, { useState } from "react";
import { Plus, History, ChevronDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputBarProps {
    className?: string;
    onSend?: (message: string) => void;
    isInitial?: boolean;
    onHistoryClick?: () => void;
    onFileUpload?: (file: File) => void;
}

export const InputBar = ({
    className,
    onSend,
    isInitial = false,
    onHistoryClick,
    onFileUpload
}: InputBarProps) => {
    const [message, setMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleSend = () => {
        if (message.trim() || selectedFile) {
            if (selectedFile) {
                onFileUpload?.(selectedFile);
                setSelectedFile(null);
            }
            if (message.trim()) {
                onSend?.(message);
                setMessage("");
            }
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Reset value so same file can be selected again if needed
            event.target.value = "";
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
    };

    return (
        <div className={cn(
            "w-full max-w-3xl mx-auto transition-all duration-500 ease-in-out",
            isInitial ? "mb-1" : "pb-1",
            className
        )}>
            <div className="relative glass-card premium-shadow border border-border bg-card p-3 min-h-[120px] flex flex-col">
                {selectedFile && (
                    <div className="flex items-center gap-2 mb-2 p-2 bg-secondary/50 rounded-lg border border-border w-fit animate-in fade-in slide-in-from-bottom-2">
                        <div className="w-8 h-8 rounded bg-background flex items-center justify-center border border-border">
                            <ArrowUp className="rotate-45 text-accent" size={16} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-foreground max-w-[200px] truncate">
                                {selectedFile.name}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                                {(selectedFile.size / 1024).toFixed(1)} KB
                            </span>
                        </div>
                        <button
                            onClick={removeFile}
                            className="ml-2 p-1 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
                        >
                            <Plus size={16} className="rotate-45" />
                        </button>
                    </div>
                )}

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isInitial ? "How can I help you today?" : "Reply..."}
                    className="flex-1 bg-transparent border-none outline-none resize-none text-foreground placeholder:text-muted-foreground py-1 px-1 text-sm"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />

                <div className="flex items-center justify-between mt-1 pt-1">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => fileInputRef.current?.click()}
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
                            disabled={!message.trim() && !selectedFile}
                            className={cn(
                                "p-2 rounded-lg transition-all duration-300",
                                (message.trim() || selectedFile)
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
