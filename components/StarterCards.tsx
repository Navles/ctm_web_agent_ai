"use client";

import React from "react";
import {
    BarChart3,
    ClipboardList,
    AlertTriangle,
    PieChart,
    TrendingUp
} from "lucide-react";

const StarterCard = ({ title, subtitle, desc, icon: Icon, onClick }: any) => (
    <button
        onClick={onClick}
        className="flex flex-col items-start text-left p-3 bg-card hover:bg-accent/5 border border-border hover:border-accent/20 rounded-xl transition-all group w-full h-full min-h-[100px] shadow-sm hover:shadow-md"
    >
        <div className="w-7 h-7 rounded-lg bg-secondary/50 flex items-center justify-center mb-2 group-hover:bg-accent/10 group-hover:text-accent transition-colors text-muted-foreground">
            <Icon size={16} />
        </div>
        <h3 className="text-foreground font-semibold text-xs mb-0.5">{title}</h3>
        <p className="text-muted-foreground text-[10px] mb-1.5 line-clamp-2">{subtitle}</p>
        <p className="text-muted-foreground/80 text-[9px] italic mt-auto">{desc}</p>
    </button>
);

export const StarterCards = ({ onSend }: { onSend: (msg: string) => void }) => {
    const cards = [
        {
            icon: BarChart3,
            title: "DIC Status",
            subtitle: "View real-time device health",
            desc: "List the total count of DIC devices"
        },
        {
            icon: ClipboardList,
            title: "Feedback Overview",
            subtitle: "NEA feedback",
            desc: "List top 5 feedback for Sep 1, 2025"
        },
        {
            icon: AlertTriangle,
            title: "Defect Notices",
            subtitle: "Insights",
            desc: "List top 5 defect notices"
        },
        {
            icon: PieChart,
            title: "Defect Notice Chart",
            subtitle: "Visual charts",
            desc: "Generate pie chart of defect notices"
        },
        {
            icon: TrendingUp,
            title: "DIC Chart Data",
            subtitle: "Visual device levels",
            desc: "Generate pie chart with DIC data"
        }
    ];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4 px-2">
            {cards.map((card, idx) => (
                <StarterCard
                    key={idx}
                    {...card}
                    onClick={() => onSend(`Generate ${card.title} - ${card.desc}`)}
                />
            ))}
        </div>
    );
};
