"use client";

import React from "react";
import { InputBar } from "./InputBar";
import { StarterCards } from "./StarterCards";

export const InitialView = ({
    onSend,
    onHistoryClick,
    onNewChat
}: {
    onSend: (message: string) => void,
    onHistoryClick?: () => void,
    onNewChat?: () => void
}) => {
    const getGreeting = () => {
        const hours = new Date().getHours();
        const day = new Date().toLocaleDateString("en-US", { weekday: "long" });

        if (hours < 12) return `Good morning, User`;
        if (hours < 18) return `Good afternoon, User`;
        return `Happy ${day}, User`;
    };

    return (
        <div className="flex-1 flex flex-col relative h-full">
            {/* Center Content: Greeting & Cards */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 gap-8">
                <div className="flex items-center gap-4 text-4xl font-serif text-foreground tracking-tight">
                    <img
                        src="/ctm-01.png"
                        alt="CTM Logo"
                        className="w-14 h-14 object-contain"
                    />
                    <h1 className="text-foreground">
                        {getGreeting()}
                    </h1>
                </div>

                <StarterCards onSend={onSend} />
            </div>

            {/* Bottom Input Bar */}
            <div className="w-full flex justify-center pb-8 px-4 z-10">
                <div className="w-full max-w-3xl">
                    <InputBar
                        isInitial
                        onSend={onSend}
                        onHistoryClick={onHistoryClick}
                        onNewChat={onNewChat}
                    />
                </div>
            </div>
        </div>
    );
};
