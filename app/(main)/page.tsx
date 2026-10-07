import AboutSection from "@/components/about-section";
import CardGridSkeleton from "@/components/comman/card-grid-skeleton";
import FeaturedCourses from "@/components/featured-courses";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials-section";
import { Suspense } from "react";

export default async function Home() {

  return (
    <>
      <HeroSection />
      <Suspense fallback={<CardGridSkeleton rows={1} />}>
        <FeaturedCourses />
      </Suspense>
      <AboutSection />
      <Testimonials />
    </>
  );
}
