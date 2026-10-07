import {
    Award,
    BookOpen,
    CheckCircle2,
    Code2,
    GraduationCap,
    Laptop,
    Target,
    Users,
} from "lucide-react";

const highlights = [
    {
        icon: Laptop,
        title: "Practical Learning",
        description:
            "Learn through hands-on practice, real projects, and technology-focused activities.",
    },
    {
        icon: Users,
        title: "Supportive Environment",
        description:
            "Get personal guidance and a comfortable learning environment for every student.",
    },
    {
        icon: Code2,
        title: "Career-Focused Skills",
        description:
            "Build practical digital and technical skills that are useful for your career.",
    },
    {
        icon: GraduationCap,
        title: "Beginner Friendly",
        description:
            "Our courses are designed to help students start learning with confidence.",
    },
];

const values = [
    "Quality computer education",
    "Practical and skill-based learning",
    "Student-focused guidance",
    "Updated technology and curriculum",
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <section className="border-b bg-slate-50/70">
                <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                            <Award className="size-4" />
                            About Aditi Computer Education
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Building Skills.
                            <span className="block text-emerald-600">
                                Creating Opportunities.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            We are committed to providing practical, accessible, and
                            career-focused computer education that helps students build
                            confidence and valuable digital skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Content */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                                Who We Are
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                Education that focuses on real skills
                            </h2>

                            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                                <p>
                                    Aditi Computer Education is dedicated to helping students
                                    understand and use technology with confidence. Our focus is
                                    not only on completing a course but also on developing
                                    practical skills that students can apply in their studies,
                                    work, and everyday life.
                                </p>

                                <p>
                                    From basic computer knowledge to advanced technical skills,
                                    we provide a structured learning environment where students
                                    can learn at their own pace with proper guidance and
                                    practical experience.
                                </p>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {highlights.slice(0, 2).map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.title} className="flex gap-3">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                                <Icon className="size-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-slate-900">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Visual Card */}
                        <div className="relative">
                            <div className="rounded-3xl border bg-slate-50 p-6 sm:p-8">
                                <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
                                    <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                                        <BookOpen className="size-7" />
                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-slate-950">
                                        Learn. Practice. Grow.
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        Our approach combines clear concepts, practical
                                        assignments, guided learning, and continuous improvement.
                                    </p>

                                    <div className="mt-8 space-y-4">
                                        {values.map((value) => (
                                            <div key={value} className="flex items-center gap-3">
                                                <CheckCircle2 className="size-5 shrink-0 text-emerald-600" />
                                                <span className="text-sm font-medium text-slate-700">
                                                    {value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border bg-white p-4 shadow-lg sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                        <Target className="size-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">Our Focus</p>
                                        <p className="font-semibold text-slate-900">
                                            Skill Development
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="border-y bg-slate-50/70">
                <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                            Our Purpose
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            Helping learners move forward
                        </h2>

                        <p className="mt-4 text-slate-600">
                            We believe that the right computer skills can create better
                            opportunities for students and professionals.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
                        {/* Mission */}
                        <div className="rounded-2xl border bg-white p-6 sm:p-8">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <Target className="size-6" />
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-slate-950">
                                Our Mission
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                To provide quality computer education through practical
                                learning, experienced guidance, and a student-friendly
                                environment that encourages continuous growth.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="rounded-2xl border bg-white p-6 sm:p-8">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <GraduationCap className="size-6" />
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-slate-950">
                                Our Vision
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                To empower learners with relevant digital and technical skills
                                so they can confidently take the next step in their education
                                and career.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                            Why Choose Us
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            A better way to learn technology
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            We focus on making computer education simple, practical, and
                            useful for every learner.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                                >
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                        <Icon className="size-5" />
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

            {/* Bottom CTA */}
            <section className="bg-emerald-600">
                <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Ready to start learning?
                            </h2>

                            <p className="mt-2 text-emerald-50">
                                Explore our courses and find the right learning path for you.
                            </p>
                        </div>

                        <a
                            href="/courses"
                            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
                        >
                            Explore Courses
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}