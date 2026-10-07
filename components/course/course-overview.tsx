import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Clock3,
    MessageSquare,
} from "lucide-react";
import { formatDuration } from "@/lib/formatters";

type Course = {
    id: string;
    title: string;
    description: string | null;
    duration: number;
    category: {
        title: string;
    };
};

type Props = {
    course: Course;
};

export default function CourseOverview({ course }: Props) {
    return (
        <>
            {/* Hero */}
            <section className=" bg-slate-50/70">
                <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                    <div>
                        {/* Back */}
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-emerald-600"
                        >
                            <ArrowLeft className="size-4" />
                            Back to Courses
                        </Link>

                        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">

                            {/* Content */}
                            <div>
                                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                                    {course.category.title}
                                </span>

                                <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                                    {course.title}
                                </h1>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                                    {course.description}
                                </p>

                                {/* Meta */}
                                <div className="mt-7 flex flex-wrap gap-3">
                                    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                                        <Clock3 className="size-4 text-emerald-600" />

                                        <span className="text-slate-500">
                                            Duration
                                        </span>

                                        <span className="font-semibold text-slate-900">
                                            {formatDuration(course.duration)}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href={`/contact?course=${course.id}`}
                                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                                    >
                                        Enquire for This Course
                                        <ArrowRight className="size-4" />
                                    </Link>

                                    <a
                                        href="tel:+919999999999"
                                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-600 hover:text-emerald-600"
                                    >
                                        <MessageSquare className="size-4" />
                                        Talk to Us
                                    </a>
                                </div>
                            </div>

                            {/* Course Card */}
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                                <p className="text-sm font-medium text-emerald-600">
                                    Course Information
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-slate-950">
                                    Start Learning Today
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Get complete information about batches,
                                    fees, admission and course details.
                                </p>

                                <div className="mt-6 divide-y">
                                    <CourseInfo
                                        label="Course"
                                        value={course.title}
                                    />

                                    <CourseInfo
                                        label="Category"
                                        value={course.category.title}
                                    />

                                    <CourseInfo
                                        label="Duration"
                                        value={formatDuration(course.duration)}
                                    />

                                    <CourseInfo
                                        label="Level"
                                        value="Beginner"
                                    />
                                </div>

                                <Link
                                    href={`/contact?course=${course.id}`}
                                    className="mt-6 flex h-11 items-center justify-center rounded-xl bg-emerald-600 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                                >
                                    Apply / Enquire
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Overview */}
        </>
    );
}

function CourseInfo({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-4 py-4 text-sm">
            <span className="text-slate-500">
                {label}
            </span>

            <span className="text-right font-medium text-slate-900">
                {value}
            </span>
        </div>
    );
}