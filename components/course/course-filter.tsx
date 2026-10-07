import Link from "next/link";

import { getCourseCategories } from "@/lib/queries/course";



interface CourseFilterProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

export default async function CourseFilter({
    searchParams,
}: CourseFilterProps) {
    const params = await searchParams
    const selectedCategory = params.category
    const categories = await getCourseCategories();

    return (
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            <Link
                href="/courses"
                className={getFilterClass(!selectedCategory)}
            >
                All Courses
            </Link>

            {categories.map((category) => {
                const isActive =
                    selectedCategory === category.id;

                return (
                    <Link
                        key={category.id}
                        href={`/courses?category=${category.id}`}
                        className={getFilterClass(isActive)}
                    >
                        {category.title}
                    </Link>
                );
            })}
        </div>
    );
}

function getFilterClass(active: boolean) {
    return [
        "shrink-0 rounded-full border px-4 py-2",
        "text-sm font-medium transition-colors",
        active
            ? "border-emerald-600 bg-emerald-600 text-white"
            : "border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700",
    ].join(" ");
}