"use client"
import { createEnquiryAction } from '@/actions/enquiry-action'
import { ContactSchema, contactSchema } from '@/zod/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'



function ContactForm({ courses }: {
    courses: { id: string, title: string }[]
}) {

    const searchParams = useSearchParams();
    const selectedCourseId = searchParams.get("course");

    const form = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            interestedCourseId: selectedCourseId || "",
            fullName: "",
            email: "",
            phone: "",
            message: "",
        }
    })

    const { register, handleSubmit, formState: { isSubmitting } } = form

    async function onSubmit(data: ContactSchema) {
        try {
            const res = await createEnquiryAction(data)
            if (res.success) {
                form.reset();
            }

            alert(res.message)
            console.log(res.message)
        } catch (error: any) {
            console.log(error)
            // alert(error.message);
        }
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5">
            {/* Name + Phone */}
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700"
                    >
                        Full Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                        {...register("fullName")}
                    />
                    {form.formState.errors.fullName && (
                        <p className="text-red-500 text-sm">
                            {form.formState.errors.fullName.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="phone"
                        className="text-sm font-medium text-slate-700"
                    >
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                        {...register("phone")}
                    />
                    {form.formState.errors.phone && (
                        <p className="text-red-500 text-sm">
                            {form.formState.errors.phone.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                >
                    Email Address
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    {...register("email")}
                />
                {form.formState.errors.email && (
                    <p className="text-red-500 text-sm">
                        {form.formState.errors.email.message}
                    </p>
                )}
            </div>

            {/* Course */}
            <div className="space-y-2">
                <label
                    htmlFor="course"
                    className="text-sm font-medium text-slate-700"
                >
                    Interested Course
                </label>

                <select
                    id="course"
                    {...form.register("interestedCourseId")}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                >
                    <option value="" disabled>
                        Select a course
                    </option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.title}
                        </option>
                    ))}
                </select>
                {form.formState.errors.interestedCourseId && (
                    <p className="text-red-500 text-sm">
                        {form.formState.errors.interestedCourseId.message}
                    </p>
                )}
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                >
                    Message
                </label>

                <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    {...register("message")}
                />
                {form.formState.errors.message && (
                    <p className="text-red-500 text-sm">
                        {form.formState.errors.message.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
                {isSubmitting ? "Submitting..." : "Submit"}
                <Send className="size-4" />
            </button>

            <p className="text-center text-xs text-slate-400">
                We&apos;ll use your information only to respond to your
                enquiry.
            </p>
        </form>
    )
}

export default ContactForm