
import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Contact Us", href: "/contact" },
];

const courses = [
    { label: "Basic Computer", href: "/courses" },
    { label: "Web Development", href: "/courses" },
    { label: "Advanced Excel", href: "/courses" },
    { label: "Graphic Designing", href: "/courses" },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
                                AC
                            </div>

                            <div>
                                <p className="text-base font-bold text-slate-950">
                                    Aditi Computer
                                </p>
                                <p className="text-xs font-medium text-emerald-600">
                                    Education
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 text-sm leading-6 text-slate-600">
                            Empowering students with practical computer education,
                            digital skills, and career-focused learning for a better
                            future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-950">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 transition hover:text-emerald-600"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-950">
                            Popular Courses
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {courses.map((course) => (
                                <li key={course.label}>
                                    <Link
                                        href={course.href}
                                        className="text-sm text-slate-600 transition hover:text-emerald-600"
                                    >
                                        {course.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-950">
                            Get In Touch
                        </h3>

                        <div className="mt-5 space-y-4">

                            {/* Address */}
                            <div className="flex gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                    <MapPin className="size-4 text-emerald-600" />
                                </div>

                                <p className="text-sm leading-6 text-slate-600">
                                    Your Institute Address,
                                    <br />
                                    Your City, Uttar Pradesh
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                    <Phone className="size-4 text-emerald-600" />
                                </div>

                                <Link
                                    href="tel:+919999999999"
                                    className="text-sm text-slate-600 hover:text-emerald-600"
                                >
                                    +91 99999 99999
                                </Link>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                    <Mail className="size-4 text-emerald-600" />
                                </div>

                                <Link
                                    href="mailto:info@aditicomputereducation.com"
                                    className="break-all text-sm text-slate-600 hover:text-emerald-600"
                                >
                                    info@aditicomputereducation.com
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Strip */}
            <div className="border-y border-emerald-100 bg-emerald-50">
                <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <div>
                        <h3 className="font-semibold text-slate-950">
                            Ready to start learning?
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                            Explore our courses and take the next step toward your goals.
                        </p>
                    </div>

                    <Link
                        href="/courses"
                        className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                        Explore Courses
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto flex flex-col gap-3 px-4 py-5 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                <p className="text-slate-500">
                    © 2026 Aditi Computer Education. All rights reserved.
                </p>

                <div className="flex items-center gap-5">
                    <Link
                        href="/privacy-policy"
                        className="text-slate-500 transition hover:text-emerald-600"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        href="/terms"
                        className="text-slate-500 transition hover:text-emerald-600"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}