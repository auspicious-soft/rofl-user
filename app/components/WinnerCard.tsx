"use client";

import Image from "next/image";

interface WinnerCardProps {
  image?: string;
  avatar?: string;
  name?: string;
  prize?: string;
  location?: string;
  date?: string;
}

export default function WinnerCard({
  image,
  avatar,
  name,
  prize,
  location,
  date,
}: WinnerCardProps) {
  return (
    <div className="w-full max-w-180 bg-black rounded-2xl p-4 flex gap-4">
      {/* LEFT IMAGE */}
      {image && (
        <div className="relative w-65 h-45 rounded-xl overflow-hidden shrink-0">
          <Image
            src={image}
            alt={prize || "Prize image"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-center gap-3 text-white">
        {/* USER */}
        {(avatar || name) && (
          <div className="flex items-center gap-3">
            {avatar && (
              <Image
                src={avatar}
                alt={name || "User avatar"}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            {name && (
              <span className="text-lg font-semibold">{name}</span>
            )}
          </div>
        )}

        {/* PRIZE */}
        {prize && (
          <span className="inline-flex items-center px-4 py-1 bg-[#F2482D] text-sm rounded-full whitespace-nowrap">
            {prize}
          </span>
        )}

        {/* META */}
        <div className="text-sm text-gray-400 space-y-1">
          {location && (
            <div>
              <span className="text-gray-500">Location</span>
              <br />
              {location}
            </div>
          )}

          {date && (
            <div>
              <span className="text-gray-500">Date</span>
              <br />
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
