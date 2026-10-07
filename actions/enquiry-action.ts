"use server"

import { db } from "@/db";
import { enquiryTable } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createEnquiryAction(data: typeof enquiryTable.$inferInsert) {
    try {
        await db.insert(enquiryTable).values(data);
        revalidatePath('/admin', 'layout')
        return { success: true, message: "Enquiry created successfully" }
    } catch (error: any) {
        console.log(error)
        return { success: false, message: error?.message || 'Failed to make enquiry' }
    }
}


