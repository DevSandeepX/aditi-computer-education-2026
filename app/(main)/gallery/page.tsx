"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Camera,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

const categories = [
    "All",
    "Classroom",
    "Computer Lab",
    "Activities",
    "Events",
];

const galleryItems = [
    {
        id: 1,
        title: "Interactive Classroom",
        category: "Classroom",
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        title: "Computer Lab",
        category: "Computer Lab",
        image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Practical Learning",
        category: "Activities",
        image:
            "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        title: "Student Training Session",
        category: "Classroom",
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        title: "Modern Computer Setup",
        category: "Computer Lab",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 6,
        title: "Learning Together",
        category: "Activities",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 7,
        title: "Technology Workshop",
        category: "Events",
        image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 8,
        title: "Computer Education",
        category: "Classroom",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    const selectedItem =
        selectedIndex !== null ? filteredItems[selectedIndex] : null;

    const showPrevious = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0
                ? filteredItems.length - 1
                : selectedIndex - 1
        );
    };

    const showNext = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === filteredItems.length - 1
                ? 0
                : selectedIndex + 1
        );
    };

    return (
        <main>
            {/* Hero */}
            <section className="border-b bg-slate-50/70">
                <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                            <Camera className="size-4" />
                            Our Gallery
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            A Glimpse Into
                            <span className="block text-emerald-600">
                                Our Learning Environment
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            Explore moments from our classrooms, computer labs, student
                            activities, workshops, and learning events.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="mb-10 flex justify-center gap-2 overflow-x-auto pb-2">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setSelectedIndex(null);
                                    }}
                                    className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${isActive
                                        ? "border-emerald-600 bg-emerald-600 text-white"
                                        : "border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* Masonry-like Grid */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredItems.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedIndex(index)}
                                className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left ${index % 5 === 0
                                    ? "sm:row-span-2"
                                    : ""
                                    }`}
                            >
                                <div
                                    className={`relative w-full ${index % 5 === 0
                                        ? "aspect-[4/5] sm:h-full sm:min-h-[520px]"
                                        : "aspect-[4/3]"
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                                            {item.category}
                                        </span>

                                        <h2 className="mt-2 text-lg font-semibold text-white">
                                            {item.title}
                                        </h2>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="rounded-2xl border border-dashed p-12 text-center">
                            <Camera className="mx-auto size-10 text-slate-300" />

                            <h3 className="mt-4 font-semibold text-slate-900">
                                No photos found
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Try selecting another gallery category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-emerald-600">
                <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Want to experience our learning environment?
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl leading-7 text-emerald-50">
                            Visit Aditi Computer Education and discover a practical,
                            supportive environment for learning technology.
                        </p>

                        <a
                            href="/contact"
                            className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
                        >
                            Visit Our Institute
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedItem && selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Close */}
                    <button
                        type="button"
                        onClick={() => setSelectedIndex(null)}
                        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                        aria-label="Close gallery"
                    >
                        <X className="size-5" />
                    </button>

                    {/* Previous */}
                    {filteredItems.length > 1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPrevious();
                            }}
                            className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-6"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="size-6" />
                        </button>
                    )}

                    {/* Image */}
                    <div
                        className="relative h-[75vh] w-full max-w-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={selectedItem.image}
                            alt={selectedItem.title}
                            fill
                            sizes="100vw"
                            className="object-contain"
                            priority
                        />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                            <span className="text-sm text-emerald-300">
                                {selectedItem.category}
                            </span>

                            <h2 className="mt-1 text-xl font-semibold text-white">
                                {selectedItem.title}
                            </h2>
                        </div>
                    </div>

                    {/* Next */}
                    {filteredItems.length > 1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNext();
                            }}
                            className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6"
                            aria-label="Next image"
                        >
                            <ChevronRight className="size-6" />
                        </button>
                    )}
                </div>
            )}
        </main>
    );
}