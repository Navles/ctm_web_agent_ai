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
        className="flex flex-col items-start text-left p-3 bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/5 hover:border-white/10 rounded-xl transition-all group w-full h-full min-h-[100px]"
    >
        <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center mb-2 group-hover:bg-accent/10 group-hover:text-accent transition-colors text-zinc-400">
            <Icon size={16} />
        </div>
        <h3 className="text-zinc-200 font-semibold text-xs mb-0.5">{title}</h3>
        <p className="text-zinc-500 text-[10px] mb-1.5 line-clamp-2">{subtitle}</p>
        <p className="text-zinc-600 text-[9px] italic mt-auto">{desc}</p>
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
