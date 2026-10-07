import {
    BookOpen,
    GraduationCap,
    Laptop,
} from "lucide-react";

const learningPoints = [
    {
        icon: BookOpen,
        title: "Understand",
        description:
            "Learn concepts clearly with structured lessons and guidance.",
    },
    {
        icon: Laptop,
        title: "Practice",
        description:
            "Apply your knowledge through practical exercises and tasks.",
    },
    {
        icon: GraduationCap,
        title: "Grow",
        description:
            "Build confidence and skills that support your next career step.",
    },
];

export default function CourseLearningApproach() {
    return (
        <section className="border-y bg-slate-50/70">
            <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                        Our Learning Approach
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Learn more than just a syllabus
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        Our approach focuses on understanding concepts
                        and applying them through practical learning.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
                    {learningPoints.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border bg-white p-6 text-center"
                            >
                                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <Icon className="size-6" />
                                </div>

                                <h3 className="mt-5 font-semibold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}