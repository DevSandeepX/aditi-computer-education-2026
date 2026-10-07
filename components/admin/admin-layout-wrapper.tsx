"use client"
import { useState } from "react";
import { Sidebar } from "../layout/sidebar";
import { cn } from "cn";

export default function AdminLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {

    const [isCollapsed, setIsCollapsed] = useState(false);


    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className={cn("min-h-screen pt-16 transition-all duration-300 lg:pt-0 p-4", isCollapsed ? "lg:ml-20" : "lg:ml-64")}>
                {children}
            </main>
        </div>
    );
}
