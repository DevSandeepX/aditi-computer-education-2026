import {
    Quote,
    Star,
    GraduationCap,
} from "lucide-react";

const testimonials = [
    {
        name: "Priya Singh",
        role: "Web Development Student",
        initials: "PS",
        message:
            "Aditi Computer Education helped me understand computer concepts in a very simple and practical way. The instructors are supportive and always ready to help.",
    },
    {
        name: "Rahul Kumar",
        role: "Advanced Excel Student",
        initials: "RK",
        message:
            "The practical classes made learning much easier for me. I especially liked the way every topic was explained with real-world examples.",
    },
    {
        name: "Neha Yadav",
        role: "Computer Course Student",
        initials: "NY",
        message:
            "I joined with very little computer knowledge, but now I feel much more confident. The learning environment is friendly and encouraging.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-slate-50/70 py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                        Student Reviews
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        What Our
                        <span className="text-emerald-600"> Students Say</span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Real experiences from students who have learned, improved,
                        and grown with Aditi Computer Education.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/40"
                        >
                            {/* Quote Icon */}
                            <div className="flex items-center justify-between">
                                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50">
                                    <Quote className="size-5 text-emerald-600" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            className="size-4 fill-emerald-500 text-emerald-500"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Review */}
                            <p className="mt-6 flex-1 text-sm leading-7 text-slate-600">
                                “{testimonial.message}”
                            </p>

                            {/* Student */}
                            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                                <div className="flex size-11 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                                    {testimonial.initials}
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">
                                        {testimonial.name}
                                    </h3>

                                    <div className="mt-1 flex items-center gap-1.5">
                                        <GraduationCap className="size-3.5 text-emerald-600" />
                                        <p className="text-xs text-slate-500">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom Trust */}
                <div className="mt-10 flex justify-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600">
                        <span className="font-semibold text-slate-900">
                            Trusted by learners
                        </span>

                        <span className="hidden h-4 w-px bg-slate-200 sm:block" />

                        <span className="flex items-center gap-1.5">
                            <Star className="size-4 fill-emerald-500 text-emerald-500" />
                            <strong className="text-slate-900">4.9/5</strong>
                            student satisfaction
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}