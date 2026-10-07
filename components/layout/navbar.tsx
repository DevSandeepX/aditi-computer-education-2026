"use client";

import Link from "next/link";
import { Menu, Phone, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Courses",
        href: "/courses",
    },
    {
        label: "Gallery",
        href: "/gallery",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5"
                >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-sm">
                        AC
                    </div>

                    <div className="leading-none">
                        <p className="text-sm font-bold tracking-tight text-slate-950 sm:text-base">
                            Aditi Computer
                        </p>

                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                            Education
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href="tel:+919999999999"
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-600"
                    >
                        <Phone className="size-4" />
                        <span>Call Us</span>
                    </Link>

                    <Button
                        className="rounded-xl bg-emerald-600 px-5 hover:bg-emerald-700"
                    >
                        <Link href="/contact" className="flex items-center gap-2">
                            Enquire Now
                            <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger render={<Button
                        variant="outline"
                        size="icon"
                        className="size-10 rounded-xl border-slate-200 lg:hidden"
                        aria-label="Open navigation menu"
                    >
                        <Menu className="size-5" />
                    </Button>}>

                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-[85%] max-w-sm border-l border-slate-200 px-5 sm:px-6"
                    >
                        <SheetHeader className="border-b border-slate-100 pb-5">
                            <SheetTitle>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2.5 text-left"
                                >
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white">
                                        AC
                                    </div>

                                    <div className="leading-none">
                                        <p className="text-sm font-bold text-slate-950">
                                            Aditi Computer
                                        </p>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                                            Education
                                        </p>
                                    </div>
                                </Link>
                            </SheetTitle>
                        </SheetHeader>

                        <nav className="mt-6 flex flex-col">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition hover:text-emerald-600"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <div className="mt-8 space-y-3">
                            <Link
                                href="tel:+919999999999"
                                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                            >
                                <Phone className="size-4" />
                                Call Us
                            </Link>

                            <Button

                                className="h-11 w-full rounded-xl bg-emerald-600 hover:bg-emerald-700"
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Enquire Now
                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Contact */}
                        <div className="mt-8 rounded-2xl bg-emerald-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                                Start Learning
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Explore our courses and take the next step toward
                                building your digital skills.
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}