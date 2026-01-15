"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { SlideLeft, SlideRight } from "../utils/icons";
import Image from "next/image";

interface Testimonial {
  message: string;
  name: string;
  location: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    message:
      "I came in pretty skeptical, but the platform won me over quickly. Everything feels transparent, the interactions are smooth, and the overall energy is surprisingly positive. The instant digital rewards make every moment feel engaging, and the community aspect adds a layer of excitement I didn’t expect. It’s become a regular part of my day.",
    name: "Beck Alves",
    location: "Sydney, Australia",
    avatar: "https://placehold.co/51x51",
  },
  {
    message:
      "Absolutely love it! The interface is intuitive, and the experience keeps me coming back. The community vibe is unmatched, and every win feels rewarding.",
    name: "Jordan Smith",
    location: "New York, USA",
    avatar: "https://placehold.co/51x51",
  },
  {
    message:
      "A seamless platform with exciting rewards. The engagement is real, and the platform’s energy is contagious. Highly recommend giving it a try!",
    name: "Casey Miller",
    location: "London, UK",
    avatar: "https://placehold.co/51x51",
  },
];

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="self-stretch px-6 sm:px-12 lg:px-24 py-10 rounded-[40px] flex flex-col items-center gap-7 overflow-hidden relative">
      {/* Heading */}
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-[#F2482D] text-5xl font-extrabold  capitalize leading-[73px]">
          Why People Love Us
        </h2>
      </div>

      {/* Carousel */}
      <div className="self-stretch relative flex justify-center items-center gap-10">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="p-3 bg-primary-red rounded-full flex justify-center items-center z-10 hover:scale-105 transition-transform"
        >
          <SlideLeft />
        </button>

        {/* Testimonial Card Wrapper */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Background (wider & shorter than card) */}
          <div className="absolute inset-x-16 h-50 bg-white/10 rounded-3xl z-0 top-1/2 -translate-y-1/2" />

          {/* Main Testimonial Card */}
          <div className="relative z-10 max-w-6xl w-full p-9 bg-black rounded-[20px] shadow-[0_4px_8px_0_rgba(43,41,62,0.10)] flex flex-col gap-7">
            <p className="text-white text-lg font-medium leading-9">
              {testimonial.message}
            </p>

            <div className="flex items-center gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src={testimonial.avatar}
                width={48}
                height={48}
                alt={testimonial.name}
              />
              <div className="flex flex-col gap-1">
                <span className="text-Stroke text-lg font-bold">
                  {testimonial.name}
                </span>
                <span className="text-Stroke text-sm font-normal">
                  {testimonial.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="p-3 bg-primary-red rounded-full flex justify-center items-center z-10 hover:scale-105 transition-transform"
        >
          <SlideRight />
        </button>
      </div>
    </section>
  );
}
