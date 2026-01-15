"use client";

import Image from "next/image";

interface BreadCrumbProps {
  title: string;
  badgeText?: string;
}


export default function BreadCrumb({ title, badgeText }: BreadCrumbProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-10 w-full overflow-hidden rounded-4xl">
      <div className="relative min-h-96 sm:min-h-80 lg:min-h-90 rounded-4xl">
        <Image
          src={"/images/watch.png"}
          alt="Hero image"
          fill
          priority
          className="object-cover rounded-4xl"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-10">
        <div
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-fill shadow-xl"
          style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        >
          <HeroContent title={title} badgeText={badgeText} />
        </div>
      </div>
    </section>
  );
}


interface HeroContentProps {
  title: string;
  badgeText?: string;
}

function HeroContent({ title, badgeText }: HeroContentProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 text-center">
      <div className="flex flex-col gap-3 sm:gap-4">

        {badgeText && (
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-[10px] mx-auto">
            <span className="text-[#F2482D] text-xs sm:text-sm font-bold">
              {badgeText}
            </span>
          </div>
        )}

        <h1 className="text-[#F2482D] text-3xl sm:text-4xl lg:text-5xl bricolage font-extrabold leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}

