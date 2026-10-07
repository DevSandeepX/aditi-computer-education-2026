import Link from "next/link";
import {
    ArrowRight,
} from "lucide-react";
import { db } from "@/db";
import { and, eq } from "drizzle-orm";
import { courseTable } from "@/db/schema";
import CourseCard from "./course/course-card";


export default async function FeaturedCourses() {
    const courses = await getCourses(3);
    return (
        <section className="bg-slate-50/70 py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                        Our Courses
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Learn Skills That
                        <span className="text-emerald-600"> Build Your Career</span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Explore practical computer courses designed to help you
                        develop useful skills and prepare for real-world opportunities.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => {
                        return (
                            <CourseCard course={course} key={course.id} />
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center">
                    <Link
                        href="/courses"
                        className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                        View All Courses
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

async function getCourses(limit: number) {
    "use cache"

    return db.query.courseTable.findMany({
        where: and(eq(courseTable.isFeatured, true), eq(courseTable.status, 'published')),
        limit,
        with: {
            category: {
                columns: {
                    title: true
                }
            }
        }
    })
}