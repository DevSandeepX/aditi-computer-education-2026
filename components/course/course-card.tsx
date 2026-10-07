
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Clock3,
    Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDuration } from "@/lib/formatters";

type Course = {
    id: string;
    duration: number;
    parentId: string | null;
    title: string;
    imageUrl: string;
    sortDescription: string;
    description: string | null;
    isFeatured: boolean;
    status: "draft" | "published" | "private" | "archived";
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
    category: {
        title: string;
    };
};

interface CourseCardProps {
    course: Course;
}

function CourseCard({ course }: CourseCardProps) {
    const isChildCourse = Boolean(course.parentId);

    return (
        <Card className="group overflow-hidden border-border/60 bg-card py-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden bg-muted">
                <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                {/* Category */}
                <Badge
                    variant="secondary"
                    className="absolute left-4 top-4 border-0 bg-background/90 backdrop-blur-sm"
                >
                    {course.category.title}
                </Badge>

                {/* Featured */}
                {course.isFeatured && (
                    <Badge className="absolute right-4 top-4 gap-1 border-0 bg-primary text-primary-foreground">
                        <Star className="size-3.5 fill-current" />
                        Featured
                    </Badge>
                )}

                {/* Course type */}
                {isChildCourse && (
                    <Badge
                        variant="outline"
                        className="absolute bottom-4 left-4 border-white/30 bg-black/30 text-white backdrop-blur-sm"
                    >
                        Module
                    </Badge>
                )}
            </div>

            {/* Content */}
            <CardContent className="space-y-2 px-5">
                <div className="space-y-2">
                    <h3 className="line-clamp-1 text-xl font-semibold tracking-tight">
                        {course.title}
                    </h3>

                    <p className="line-clamp-2 text-sm leading-6 text-muted-foreground line-clamp-3">
                        {course.sortDescription}
                    </p>
                </div>

                <Separator />

                {/* Course meta */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock3 className="size-4" />
                        <span>
                            {formatDuration(course.duration)}
                        </span>
                    </div>

                    <Badge
                        variant="outline"
                        className="capitalize"
                    >
                        {course.status}
                    </Badge>
                </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className="px-5 pb-5">
                <Link
                    className="flex items-center justify-center gap-2 w-full bg-emerald-500 py-2 rounded-lg text-white"
                    href={`/courses/${course.id} `}>
                    View Course
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    );
}

export default CourseCard;
