import CourseCard from "./course-card";
import { getCourses } from "@/lib/queries/course";

interface CourseGridProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

export default async function CourseGrid({
    searchParams,
}: CourseGridProps) {
    const params = await searchParams
    const courses = await getCourses({ category: params.category });

    if (!courses.length) {
        return (
            <div className="rounded-2xl border border-dashed p-10 text-center">
                <h3 className="font-semibold">
                    No courses found
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Try changing your search or category filter.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    course={course}
                />
            ))}
        </div>
    );
}