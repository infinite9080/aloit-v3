"use client";
import React, { useState } from "react";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface AnimatedTabsProps {
    tabs?: Tab[];
    defaultTab?: string;
    className?: string;
}

const AnimatedTabs = ({
    tabs = [],
    defaultTab,
    className,
}: AnimatedTabsProps) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

    if (!tabs?.length) return null;

    return (
        <div className={`w-full max-w-7xl flex flex-col gap-y-4 ${className || ''}`}>
            <div className="flex gap-2 flex-wrap bg-gradient-to-br from-gray-50 to-white shadow-lg p-3 rounded-2xl">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl outline-none transition-all duration-200 ${activeTab === tab.id
                            ? 'bg-neoncyan text-white shadow-lg shadow-neoncyan/30'
                            : 'text-darkpurple hover:bg-white hover:shadow-md'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-2xl text-darkpurple rounded-2xl min-h-60">
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <div key={tab.id} className="animate-fadeIn">
                            {tab.content}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export { AnimatedTabs };
