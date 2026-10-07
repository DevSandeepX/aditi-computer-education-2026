import React from "react";
import CardSkeleton from "./card-skeleton";

function CardGridSkeleton({ rows }: { rows: number }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: rows * 3 }).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </div>
    );
}

export default CardGridSkeleton;