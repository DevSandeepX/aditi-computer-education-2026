import { Clock3 } from "lucide-react";

type Lesson = {
    id: string;
    title: string;
    description?: string | null;
    order: number,
    duration?: string | null;
};

type Props = {
    lessons: Lesson[];
};

export default function LessonList({ lessons }: Props) {
    if (!lessons.length) {
        return (
            <div className="mt-8 rounded-2xl border border-dashed p-8 text-center">
                <p className="text-sm text-slate-500">
                    Lessons for this course will be available soon.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {lessons.sort((a, b) => (a.order - b.order)).map((lesson, index) => (
                    <div
                        key={lesson.id}
                        className="group rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-200"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xs font-bold text-emerald-600">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-slate-900">
                                    {lesson.title}
                                </h3>

                                {lesson.description && (
                                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                                        {lesson.description}
                                    </p>
                                )}

                                {lesson.duration && (
                                    <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                                        <Clock3 className="size-3.5" />
                                        {lesson.duration}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}