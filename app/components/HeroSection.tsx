"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  { id: 1, image: "/images/watch.png" },
  { id: 2, image: "/images/watch.png" },
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
    <section className="relative px-10 w-full overflow-hidden rounded-4xl ">
      {/* MAIN FULL-WIDTH IMAGE */}
      <div className="relative min-h-105 sm:min-h-130 rounded-4xl">
        <Image
          src={slides[activeIndex].image}
          alt="Hero image"
          fill
          priority
          className="object-cover rounded-4xl"
        />

        {/* Soft overlays */}
        <div className="absolute inset-0 " />
      </div>

      {/* OVERLAY CONTENT PANEL */}
      <div className="absolute inset-0 lg:left-10 flex items-center">
        <div
          className="
            relative  
            ml-6 sm:ml-12
            max-w-lg
            w-full
            p-8 sm:p-10
            rounded-3xl
            bg-fill 
            shadow-xl
          "
          style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        >
          <HeroContent />
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#F2482D]" : "bg-[white]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center px-4 py-2 bg-[#FFFFFF] rounded-[10px] w-fit">
          <span className="text-[#F2482D] text-sm font-bold ">
            Experience Pure Excitement
          </span>
        </div>

        <h1 className="text-[#F2482D] text-4xl sm:text-5xl bricolage font-extrabold leading-tight ">
          Win Big. Pay Less.
        </h1>

        <p className="text-Stroke text-base sm:text-lg font-medium leading-7 ">
          Step into a world built around excitement, discovery, and moments that
          feel genuinely rewarding.
        </p>
      </div>

      <button className="inline-flex items-center gap-3 px-8 py-3 bg-[#F2482D] rounded-[10px] w-fit">
        <span className="text-White text-base font-medium ">Browse Items</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
