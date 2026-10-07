import { Suspense } from "react";


import CardGridSkeleton from "@/components/comman/card-grid-skeleton";
import CourseFilter from "@/components/course/course-filter";
import CourseGrid from "@/components/course/course-grid";
import CourseLearningApproach from "@/components/course/course-learning-approach";
import CourseCta from "@/components/course/course-cta";

interface CoursesPageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

export default async function CoursesPage({
    searchParams,
}: CoursesPageProps) {


    return (
        <main>
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Suspense fallback={<div className="h-10" />}>
                        <CourseFilter searchParams={searchParams} />
                    </Suspense>
                    <Suspense
                        fallback={<CardGridSkeleton rows={3} />}
                    >
                        <CourseGrid searchParams={searchParams} />
                    </Suspense>
                </div>
            </section>
            <CourseLearningApproach />
            <CourseCta />
        </main>
    );
}