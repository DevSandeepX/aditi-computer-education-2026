import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Code2,
    Monitor,
    Sparkles,
    Users,
} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-50/70 blur-3xl" />
                <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

                    {/* LEFT CONTENT */}
                    <div className="max-w-2xl">

                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                            <Sparkles className="size-4" />
                            Learn Today. Grow Tomorrow.
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Learn Technology.
                            <span className="mt-2 block text-emerald-600">
                                Build Your Future.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                            Aditi Computer Education provides practical and
                            career-focused computer education to help students
                            develop valuable digital skills and confidence.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/courses"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 font-semibold text-white transition hover:bg-emerald-700"
                            >
                                Explore Courses
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-800 transition hover:border-emerald-200 hover:bg-emerald-50"
                            >
                                Get In Touch
                            </Link>
                        </div>

                        {/* Trust points */}
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                            {[
                                "Practical Learning",
                                "Expert Guidance",
                                "Career Focused",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-slate-600"
                                >
                                    <CheckCircle2 className="size-4 text-emerald-600" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - NO IMAGE */}
                    <div className="relative mx-auto w-full max-w-lg">

                        {/* Main visual card */}
                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">

                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100">
                                        <Monitor className="size-5 text-emerald-600" />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            Aditi Computer Education
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Learn • Practice • Grow
                                        </p>
                                    </div>
                                </div>

                                <div className="size-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                            </div>

                            {/* Learning card */}
                            <div className="mt-6 rounded-2xl bg-slate-950 p-6">
                                <div className="mb-5 flex items-center gap-2">
                                    <Code2 className="size-5 text-emerald-400" />

                                    <span className="text-sm font-medium text-slate-300">
                                        Skills that matter
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white">
                                    Turn Learning
                                    <span className="block text-emerald-400">
                                        Into Opportunity.
                                    </span>
                                </h3>

                                <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
                                    <div className="h-full w-[78%] rounded-full bg-emerald-500" />
                                </div>

                                <div className="mt-2 flex justify-between text-xs text-slate-400">
                                    <span>Learning Progress</span>
                                    <span>78%</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="mt-5 grid grid-cols-2 gap-3">
                                <div className="rounded-2xl bg-emerald-50 p-5">
                                    <Users className="size-5 text-emerald-600" />

                                    <p className="mt-4 text-2xl font-bold text-slate-900">
                                        500+
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Students
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-5">
                                    <BookOpen className="size-5 text-emerald-600" />

                                    <p className="mt-4 text-2xl font-bold text-slate-900">
                                        10+
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Courses
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating card */}
                        <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:block">
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100">
                                    <CheckCircle2 className="size-5 text-emerald-600" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        Practical Education
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Learn by doing
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -right-4 -top-4 grid grid-cols-4 gap-2 opacity-60">
                            {Array.from({ length: 16 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="size-1.5 rounded-full bg-emerald-400"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}