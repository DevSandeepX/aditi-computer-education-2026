import { notFound } from "next/navigation";

import { getCourseWithLesson } from "@/lib/queries/course";
import CourseOverview from "./course-overview";
import LessonList from "@/components/lesson/lesson-list";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CourseDetail({ params }: Props) {
    const { id } = await params;
    const course = await getCourseWithLesson(id);
    if (!course) {
        notFound();
    }

    return (
        <main>
            <CourseOverview course={course} />
            <LessonList lessons={course.lessons} />
        </main>
    );
}