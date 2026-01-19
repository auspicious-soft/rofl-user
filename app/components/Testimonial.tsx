"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SlideLeft, SlideRight } from "../utils/icons";

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
    avatar: "/images/Avatar.svg",
  },
  {
    message:
      "Absolutely love it! The interface is intuitive, and the experience keeps me coming back. The community vibe is unmatched, and every win feels rewarding.",
    name: "Jordan Smith",
    location: "New York, USA",
    avatar: "/images/Avatar.svg",
  },
  {
    message:
      "A seamless platform with exciting rewards. The engagement is real, and the platform’s energy is contagious. Highly recommend giving it a try!",
    name: "Casey Miller",
    location: "London, UK",
    avatar: "/images/Avatar.svg",
  },
];

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const testimonial = TESTIMONIALS[currentIndex];

  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + total) % total);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % total);

  return (
    <section className="self-stretch px-4 sm:px-8 lg:px-24 py-8 lg:py-10 rounded-[30px] lg:rounded-[40px] flex flex-col items-center gap-6 lg:gap-7 overflow-hidden relative">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 lg:gap-5">
        <h2 className="text-[#F2482D] text-2xl sm:text-4xl lg:text-5xl font-extrabold capitalize leading-tight lg:leading-[73px] text-center">
          Why People Love Us
        </h2>
      </div>

      {/* Carousel */}
      <div className="self-stretch relative flex justify-center items-center gap-4 sm:gap-8 lg:gap-10">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="p-2 sm:p-3 bg-primary-red rounded-full flex justify-center items-center z-10 hover:scale-105 transition-transform"
        >
          <SlideLeft />
        </button>

        {/* Card Wrapper */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Background */}
          <div className="hidden sm:block absolute inset-x-6 lg:inset-x-16 h-32 lg:h-50 bg-white/10 rounded-3xl z-0 top-1/2 -translate-y-1/2" />

          {/* Testimonial Card */}
          <div className="relative z-10 max-w-6xl w-full p-5 sm:p-7 lg:p-9 bg-black rounded-[16px] lg:rounded-[20px] shadow-[0_4px_8px_0_rgba(43,41,62,0.10)] flex flex-col gap-5 lg:gap-7">
            <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-6 sm:leading-8 lg:leading-9">
              {testimonial.message}
            </p>

            <div className="flex items-center gap-3 lg:gap-4">
              <Image
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
                src={testimonial.avatar}
                width={48}
                height={48}
                alt={testimonial.name}
              />
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <span className="text-Stroke text-base lg:text-lg font-bold">
                  {testimonial.name}
                </span>
                <span className="text-Stroke text-xs lg:text-sm font-normal">
                  {testimonial.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="p-2 sm:p-3 bg-primary-red rounded-full flex justify-center items-center z-10 hover:scale-105 transition-transform"
        >
          <SlideRight />
        </button>
      </div>
    </section>
  );
}
