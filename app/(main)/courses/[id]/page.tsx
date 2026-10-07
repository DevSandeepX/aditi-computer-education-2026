import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Clock3,
    GraduationCap,
    MessageSquare,
} from "lucide-react";
import { notFound } from "next/navigation";
import { getCourseWithLesson } from "@/lib/queries/course";
import CourseOverview from "@/components/course/course-overview";
import LessonList from "@/components/lesson/lesson-list";
import { Suspense } from "react";
import CourseDetail from "@/components/course/course-detail";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CourseDetailPage({
    params,
}: PageProps) {
    return (
        <Suspense>
            <CourseDetail params={params} />
        </Suspense>
    );
}

