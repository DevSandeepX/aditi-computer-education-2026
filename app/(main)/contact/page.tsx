
import ContactFormSkeleton from "@/components/contact/contact-form-skeleton";
import ContactFormWrapper from "@/components/contact/contact-form-wrapper";
import {
    Clock,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
} from "lucide-react";
import { Suspense } from "react";

const contactInfo = [
    {
        icon: Phone,
        title: "Call Us",
        value: "+91 99999 99999",
        href: "tel:+919999999999",
        description: "Talk to our team directly",
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "info@aditicomputereducation.com",
        href: "mailto:info@aditicomputereducation.com",
        description: "Send us your enquiry",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "Your Institute Address",
        href: "#location",
        description: "Come and meet us",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Mon - Sat: 9:00 AM - 7:00 PM",
        href: "#",
        description: "Sunday closed",
    },
];

export default function ContactPage() {
    return (
        <main>
            {/* Hero */}
            <section className="border-b bg-slate-50/70">
                <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                            <MessageSquare className="size-4" />
                            Get In Touch
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Let&apos;s Start Your
                            <span className="block text-emerald-600">
                                Learning Journey
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            Have questions about our courses, admissions, or learning
                            programs? Send us an enquiry and our team will get back to you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                        {/* Contact Information */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                                Contact Information
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                                We&apos;re here to help
                            </h2>

                            <p className="mt-4 leading-7 text-slate-600">
                                Whether you want to know about a course, admission process,
                                fees, timings, or anything else, feel free to contact us.
                            </p>

                            <div className="mt-8 space-y-4">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="group flex gap-4 rounded-2xl border bg-white p-4 transition-all hover:border-emerald-200 hover:shadow-sm"
                                        >
                                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                                                <Icon className="size-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm text-slate-500">
                                                    {item.title}
                                                </p>

                                                <p className="mt-1 break-words font-semibold text-slate-900">
                                                    {item.value}
                                                </p>

                                                <p className="mt-1 text-xs text-slate-400">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Small Info Card */}
                            <div className="mt-6 rounded-2xl bg-emerald-600 p-6">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white">
                                    <MessageSquare className="size-5" />
                                </div>

                                <h3 className="mt-4 font-semibold text-white">
                                    Need course guidance?
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-emerald-50">
                                    Tell us about your learning goals and we&apos;ll help you
                                    choose a suitable course.
                                </p>
                            </div>
                        </div>

                        {/* Enquiry Form */}
                        <div className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                                    Enquiry Form
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                                    Send us a message
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Fill in your details and we&apos;ll contact you soon.
                                </p>
                            </div>
                            <Suspense fallback={<ContactFormSkeleton />}>
                                <ContactFormWrapper />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section id="location" className="border-y bg-slate-50/70">
                <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                                Find Us
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                                Visit Aditi Computer Education
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-slate-600">
                                Visit our institute to learn more about our courses, meet our
                                team, and understand how we can help you achieve your learning
                                goals.
                            </p>

                            <div className="mt-6 flex items-start gap-3">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <MapPin className="size-5" />
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-900">
                                        Institute Address
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                        Your complete institute address goes here.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="flex min-h-[300px] items-center justify-center rounded-3xl border bg-white">
                            <div className="text-center">
                                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                                    <MapPin className="size-7" />
                                </div>

                                <h3 className="mt-4 font-semibold text-slate-900">
                                    Institute Location
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Google Maps can be embedded here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}