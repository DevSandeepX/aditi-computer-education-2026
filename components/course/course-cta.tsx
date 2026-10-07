import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CourseCta() {
    return (
        <section className="bg-emerald-600">
            <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                    <div>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Not sure which course is right for you?
                        </h2>

                        <p className="mt-2 text-emerald-50">
                            Talk to us and get guidance based on your
                            learning goals.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
                    >
                        Talk to Us
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}