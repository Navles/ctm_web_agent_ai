"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./themeContext";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative p-2.5 rounded-xl transition-all duration-300 group text-foreground",
                "hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50",
                "hover:scale-105 active:scale-95"
            )}
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    size={20}
                    className={cn(
                        "absolute inset-0 transition-all duration-300",
                        theme === "light"
                            ? "rotate-0 scale-100 opacity-100"
                            : "rotate-90 scale-0 opacity-0"
                    )}
                    strokeWidth={1.5}
                />
                <Moon
                    size={20}
                    className={cn(
                        "absolute inset-0 transition-all duration-300",
                        theme === "dark"
                            ? "rotate-0 scale-100 opacity-100"
                            : "-rotate-90 scale-0 opacity-0"
                    )}
                    strokeWidth={1.5}
                />
            </div>
        </button>
    );
};