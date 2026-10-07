"use client";

import {
    BookOpen,
    ChevronLeft,
    ChevronRight,
    FileText,
    GraduationCap,
    LayoutDashboard,
    Menu,
    Settings,
    Users,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Courses",
        href: "/admin/courses",
        icon: BookOpen,
    },
    {
        title: "Lessons",
        href: "/admin/lessons",
        icon: FileText,
    },
    {
        title: "Students",
        href: "/admin/students",
        icon: Users,
    },
    {
        title: "Exams",
        href: "/admin/exams",
        icon: GraduationCap,
    },
    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export function Sidebar({
    isCollapsed,
    setIsCollapsed,
}: {
    isCollapsed: boolean;
    setIsCollapsed: (value: any) => void;
}) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center border-b bg-white px-4 lg:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
                    aria-label="Open sidebar"
                >
                    <Menu className="size-5" />
                </button>

                <Link
                    href="/admin"
                    className="ml-3 text-lg font-semibold text-slate-900"
                >
                    Admin Panel
                </Link>
            </header>

            {/* Mobile Overlay */}
            {isOpen && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-white
                    transition-all duration-300
                    ${isCollapsed ? "lg:w-20" : "lg:w-64"}
                    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                    w-72
                `}
            >
                {/* Logo */}
                <div className="flex h-16 items-center justify-between border-b px-4">
                    <Link
                        href="/admin"
                        className="flex min-w-0 items-center gap-3"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white">
                            A
                        </div>

                        {!isCollapsed && (
                            <div className="hidden min-w-0 lg:block">
                                <p className="truncate font-semibold text-slate-900">
                                    Admin Panel
                                </p>
                                <p className="truncate text-xs text-slate-500">
                                    Course Management
                                </p>
                            </div>
                        )}

                        {/* Mobile title */}
                        <div className="min-w-0 lg:hidden">
                            <p className="truncate font-semibold text-slate-900">
                                Admin Panel
                            </p>
                        </div>
                    </Link>

                    {/* Mobile close */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
                        aria-label="Close sidebar"
                    >
                        <X className="size-5" />
                    </button>

                    {/* Desktop collapse */}
                    <button
                        type="button"
                        onClick={() => setIsCollapsed((prev: any) => !prev)}
                        className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:block"
                        aria-label="Toggle sidebar"
                    >
                        {isCollapsed ? (
                            <ChevronRight className="size-4" />
                        ) : (
                            <ChevronLeft className="size-4" />
                        )}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 overflow-y-auto p-3">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        const isActive =
                            item.href === "/admin"
                                ? pathname === "/admin"
                                : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                title={isCollapsed ? item.title : undefined}
                                className={`
                                    flex h-11 items-center gap-3 rounded-xl px-3
                                    text-sm font-medium transition-colors
                                    ${isActive
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }
                                    ${isCollapsed ? "lg:justify-center" : ""}
                                `}
                            >
                                <Icon className="size-5 shrink-0" />

                                <span
                                    className={`
                                        truncate
                                        ${isCollapsed ? "lg:hidden" : ""}
                                    `}
                                >
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="border-t p-3">
                    <div
                        className={`
                            rounded-xl bg-slate-50 p-3
                            ${isCollapsed ? "lg:p-2" : ""}
                        `}
                    >
                        <p
                            className={`
                                text-xs text-slate-500
                                ${isCollapsed ? "lg:hidden" : ""}
                            `}
                        >
                            Admin Dashboard
                        </p>

                        <p
                            className={`
                                mt-1 text-sm font-medium text-slate-700
                                ${isCollapsed ? "lg:hidden" : ""}
                            `}
                        >
                            Manage your platform
                        </p>

                        {isCollapsed && (
                            <Settings className="mx-auto size-5 text-slate-500 lg:block" />
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
