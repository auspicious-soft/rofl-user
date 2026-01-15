"use client";
import React from "react";

interface SectionHeaderProps {
  title: string;
  firstBgImage?: string;
  secondBgImage?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  firstBgImage = "/images/watch.png",
  secondBgImage = "/images/text-bg.png",
}) => {
  return (
    <div className="w-full px-14 py-4 flex justify-center">
      <div className="relative w-full min-w-7xl h-64 rounded-4xl overflow-hidden flex items-center justify-center">
        
        <img
          src={firstBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10">
          <div className="relative px-16 py-6 rounded-xl overflow-hidden">
            
            {/* Capsule Background Image */}
            <img
              src={secondBgImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover "
            />

            {/* Optional dark overlay (matches reference depth) */}
            <div className="absolute inset-0 bg-black/30" />

            {/* 🔹 Text */}
            <div className="relative z-10 text-center text-[#F2482D] text-4xl font-extrabold bricolage">
              {title}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionHeader;
