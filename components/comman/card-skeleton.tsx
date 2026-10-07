import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function CardSkeleton() {
    return (
        <Card className="overflow-hidden">
            {/* Image */}
            <Skeleton className="h-48 w-full rounded-none" />

            <CardHeader className="space-y-3">
                {/* Title */}
                <Skeleton className="h-6 w-3/4" />

                {/* Subtitle */}
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>

            <CardContent className="space-y-2">
                {/* Description */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </CardContent>

            <CardFooter className="flex items-center justify-between">
                {/* Price / meta */}
                <Skeleton className="h-5 w-20" />

                {/* Button */}
                <Skeleton className="h-9 w-24" />
            </CardFooter>
        </Card>
    );
}

export default CardSkeleton;