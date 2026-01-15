"use client";

import React, { useState } from "react";
import BreadCrumb from "@/app/components/BreadCrumb";
import WinnerCard from "@/app/components/WinnerCard";

type Winner = {
  id: number;
  image: string;
  avatar: string;
  name: string;
  prize: string;
  location: string;
  date: string;
};

const winners: Winner[] = [
  {
    id: 1,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  {
    id: 2,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  {
    id: 3,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  {
    id: 3,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  {
    id: 3,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  {
    id: 3,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  {
    id: 3,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  {
    id: 3,
    image: "/images/Rectangle 14.svg",
    avatar: "/images/ps.png",
    name: "Alex M.",
    prize: "Macbook Air",
    location: "Austin, TX",
    date: "Jan 18, 2025",
  },
  // add more
];

const prizeOptions = ["All", "Macbook Air", "iPhone", "Playstation"];

const Page = () => {
  const [selectedPrize, setSelectedPrize] = useState("All");

  const filteredWinners =
    selectedPrize === "All"
      ? winners
      : winners.filter((w) => w.prize === selectedPrize);

  return (
    <>
      <BreadCrumb title="Recent Winners" badgeText="Experience Pure Excitement" />

      <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
        {/* HEADER ROW */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white hidden lg:block text-xl font-semibold">
          </h2>

          {/* DROPDOWN */}
          <select
            value={selectedPrize}
            onChange={(e) => setSelectedPrize(e.target.value)}
            className="bg-[#111] border border-[#2a2a2a] text-white text-sm px-4 py-2 rounded-lg outline-none cursor-pointer"
          >
            {prizeOptions.map((option) => (
              <option key={option} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-0 lg:mb-6">
          {filteredWinners.map((winner) => (
            <WinnerCard
              key={winner.id}
              image={winner.image}
              avatar={winner.avatar}
              name={winner.name}
              prize={winner.prize}
              location={winner.location}
              date={winner.date}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
