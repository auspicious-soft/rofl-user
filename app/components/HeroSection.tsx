"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  { id: 1, image: "/images/watch.png" },
  { id: 2, image: "/images/car.png" },
  { id: 3, image: "/images/watch.png" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 sm:px-6 lg:px-10 w-full overflow-hidden rounded-4xl">
      {/* MAIN IMAGE */}
      {/* MAIN IMAGE SLIDER */}
      <div className="relative min-h-[420px] sm:min-h-105 lg:min-h-130 rounded-4xl overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-full h-full">
              <Image
                src={slide.image}
                alt="Hero image"
                fill
                priority
                className="object-cover rounded-4xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY CONTENT */}
      <div className="absolute inset-0 lg:left-10 flex items-center">
        <div
          className="
            relative
            mx-4 sm:ml-8 lg:ml-6
            max-w-full sm:max-w-md lg:max-w-lg
            w-full
            p-5 sm:p-8 lg:p-10
            rounded-2xl lg:rounded-3xl
            bg-fill
            shadow-xl
          "
          style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        >
          <HeroContent />
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#F2482D]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="flex flex-col gap-3 lg:gap-4">
        <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-white rounded-[10px] w-fit">
          <span className="text-[#F2482D] text-xs sm:text-sm font-bold">
            Experience Pure Excitement
          </span>
        </div>

        <h1 className="text-[#F2482D] text-3xl sm:text-4xl lg:text-5xl bricolage font-extrabold leading-tight">
          Win Big. Pay Less.
        </h1>

        <p className="text-Stroke text-white text-sm sm:text-base lg:text-lg font-medium leading-6 sm:leading-7">
          Step into a world built around excitement, discovery, and moments that
          feel genuinely rewarding.
        </p>
      </div>

      <Link href={"/user/marketplace"}  className="inline-flex items-center gap-3 px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 bg-[#F2482D] rounded-[10px] w-fit">
        <span className="text-white text-sm sm:text-base font-medium">
          Browse Items
        </span>
        <ArrowRight size={18} className="lg:w-5 lg:h-5" />
      </Link>
    </div>
  );
}
