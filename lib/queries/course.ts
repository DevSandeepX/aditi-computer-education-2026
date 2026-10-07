"use server"
import { and, eq, ilike } from "drizzle-orm";

import { db } from "@/db";
import { courseTable } from "@/db/schema";

interface GetCoursesParams {
    search?: string;
    category?: string;
    page?: string;
}

export async function getCourses({
    category,
}: GetCoursesParams = {}) {
    "use cache";

    const conditions = [
        eq(courseTable.status, "published"),
    ];


    if (category) {
        conditions.push(
            eq(courseTable.categoryId, category)
        );
    }

    return db.query.courseTable.findMany({
        where: and(...conditions),
        with: {
            category: {
                columns: {
                    title: true,
                },
            },
        },
    });
}

export async function getCourseCategories() {
    "use cache";

    return db.query.categoryTable.findMany({
        where: (category, { exists, eq }) =>
            exists(
                db
                    .select({ id: courseTable.id })
                    .from(courseTable)
                    .where(
                        eq(
                            courseTable.categoryId,
                            category.id
                        )
                    )
            ),
    });
}

export async function getCourseWithLesson(id: string) {
    "use cache"
    return db.query.courseTable.findFirst({
        // where: and(eq(courseTable.id, id), eq(courseTable.status, 'published')),
        where: eq(courseTable.id, id),
        with: {
            category: true,
            lessons: true
        }
    })
}

export async function getCoursesForContactForm() {
    "use cache";
    return db
        .select({
            id: courseTable.id,
            title: courseTable.title,
        })
        .from(courseTable)
        .orderBy(courseTable.title)
        .where(eq(courseTable.status, "published"));
}