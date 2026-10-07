import { z } from "zod";

export const contactSchema = z.object({
    interestedCourseId: z.string(),
    fullName: z.string().min(1, "name is required"),
    email: z.string().min(1, "email is required").email("invalid email"),
    phone: z.string().min(1, "phone is required"),
    message: z.string().min(1, "message is required")
});

export type ContactSchema = z.infer<typeof contactSchema>;
