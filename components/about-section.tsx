import Link from "next/link";
import {
    ArrowRight,
    Award,
    CheckCircle2,
    GraduationCap,
    Users,
} from "lucide-react";

const highlights = [
    "Practical and skill-based learning",
    "Experienced and supportive instructors",
    "Beginner-friendly learning environment",
    "Career-focused computer education",
];

export default function AboutSection() {
    return (
        <section className="bg-background py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

                    {/* Left Content */}
                    <div>
                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                            About Aditi Computer Education
                        </span>

                        <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Building Skills.
                            <span className="block text-emerald-600">
                                Creating Opportunities.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                            Aditi Computer Education is committed to providing quality
                            computer education that helps students understand technology,
                            develop practical skills, and move confidently towards their
                            career goals.
                        </p>

                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                            Our approach focuses on learning by doing. From basic computer
                            knowledge to professional and technical skills, we create a
                            supportive environment where every learner can grow.
                        </p>

                        {/* Highlights */}
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                                        <CheckCircle2 className="size-3.5 text-emerald-600" />
                                    </div>

                                    <span className="text-sm leading-6 text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/about"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                        >
                            Know More About Us
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Right Content */}
                    <div className="relative">

                        {/* Main Experience Card */}
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">

                            <div className="grid gap-4 sm:grid-cols-2">

                                {/* Experience */}
                                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50">
                                        <Award className="size-5 text-emerald-600" />
                                    </div>

                                    <p className="mt-5 text-3xl font-bold text-slate-950">
                                        10+
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Years of Learning
                                    </p>
                                </div>

                                {/* Students */}
                                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50">
                                        <Users className="size-5 text-emerald-600" />
                                    </div>

                                    <p className="mt-5 text-3xl font-bold text-slate-950">
                                        500+
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Students Trained
                                    </p>
                                </div>

                                {/* Courses */}
                                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50">
                                        <GraduationCap className="size-5 text-emerald-600" />
                                    </div>

                                    <p className="mt-5 text-3xl font-bold text-slate-950">
                                        10+
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Career Courses
                                    </p>
                                </div>

                                {/* Learning */}
                                <div className="relative overflow-hidden rounded-2xl bg-emerald-600 p-6">
                                    <div className="relative z-10">
                                        <p className="text-sm font-medium text-emerald-100">
                                            Our Approach
                                        </p>

                                        <p className="mt-3 text-xl font-bold text-white">
                                            Learn by Doing
                                        </p>

                                        <p className="mt-2 text-sm leading-5 text-emerald-50">
                                            Practical knowledge that you can use in the real world.
                                        </p>
                                    </div>

                                    {/* Decoration */}
                                    <div className="absolute -right-8 -top-8 size-28 rounded-full bg-white/10" />
                                    <div className="absolute -bottom-10 -left-6 size-24 rounded-full bg-white/10" />
                                </div>
                            </div>

                            {/* Bottom message */}
                            <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Education with a purpose
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            We focus on helping students gain confidence,
                                            practical knowledge, and skills for their next step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -right-3 -top-3 grid grid-cols-4 gap-1.5 opacity-60">
                            {Array.from({ length: 12 }).map((_, index) => (
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