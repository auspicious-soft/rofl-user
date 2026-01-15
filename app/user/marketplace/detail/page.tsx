"use client";

import BreadCrumb from "@/app/components/BreadCrumb";
import ProductCard from "@/app/components/ProductCard";
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  tickets: number;
  left: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Iphone 17 Pro Max",
    description:
      "Step into a world built around excitement, discovery, and moments.",
    tickets: 17,
    left: "20/500* Left",
    image: "/images/ps.png",
  },
  {
    id: 2,
    title: "AirPods Pro",
    description:
      "Step into a world built around excitement, discovery, and moments.",
    tickets: 17,
    left: "20/500* Left",
    image: "/images/iphn.png",
  },
  {
    id: 3,
    title: "Sony Playstation 5",
    description:
      "Step into a world built around excitement, discovery, and moments.",
    tickets: 17,
    left: "20/500* Left",
    image: "/images/ps.png",
  },
  {
    id: 4,
    title: "Dyson Airwrap",
    description:
      "Step into a world built around excitement, discovery, and moments.",
    tickets: 17,
    left: "20/500* Left",
    image: "/images/iphn.png",
  },
];

const categories = [
  { name: "Tech & Electronics", count: 120 },
  { name: "Luxury Goods", count: 86 },
  { name: "Watches & Timepieces", count: 42 },
  { name: "Fashion & Apparel", count: 98 },
  { name: "Home & Appliances", count: 67 },
  { name: "Sports & Outdoors", count: 51 },
  { name: "Collectibles & Hobbies", count: 29 },
  { name: "Beauty & Health", count: 74 },
  { name: "Experiences & Services", count: 18 },
];
type ListingType = "ROFL" | "PREMIUM" | "STANDARD";

const MarketPlaceDetail = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [activeListing, setActiveListing] = useState<ListingType>("ROFL");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <>
      <BreadCrumb title="Marketplace" />
      <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block bg-black rounded-2xl h-fit p-6">
            <h3 className="text-white text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat) => {
                const checked = selectedCategories.includes(cat.name);

                return (
                  <li
                    key={cat.name}
                    onClick={() => toggleCategory(cat.name)}
                    className="flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    {/* Left: Checkbox + Label */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`
              w-4 h-4 rounded
              flex items-center justify-center
              transition
              ${checked ? "bg-[#F2482D]" : "bg-[#272727]"}
            `}
                      >
                        {checked && (
                          <div className="w-2 h-2 bg-white rounded-sm" />
                        )}
                      </div>

                      <span
                        className={`text-sm transition ${
                          checked ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {cat.name}
                      </span>
                    </div>

                    {/* Right: Count */}
                    <span className="text-xs text-gray-400">({cat.count})</span>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex flex-col gap-6">
            {/* TOP FILTER BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveListing("ROFL")}
                  className={`px-4 py-2 text-sm rounded-[10px] transition
      ${
        activeListing === "ROFL"
          ? "bg-[#F2482D] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
          : "border border-gray-600 text-white shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
      }`}
                >
                  ROFL Hosted
                </button>

                <button
                  onClick={() => setActiveListing("PREMIUM")}
                  className={`px-4 py-2 text-sm rounded-[10px] transition
      ${
        activeListing === "PREMIUM"
          ? "bg-[#F2482D] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
          : "border border-gray-600 text-white shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
      }`}
                >
                  Premium
                </button>

                <button
                  onClick={() => setActiveListing("STANDARD")}
                  className={`px-4 py-2 text-sm rounded-[10px] transition
      ${
        activeListing === "STANDARD"
          ? "bg-[#F2482D] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
          : "border border-gray-600 text-white shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
      }`}
                >
                  Standard Listing
                </button>
              </div>

              <select className="bg-none border-none cursor-pointer text-white text-sm rounded-lg px-3 py-2 outline-none">
                <option className="text-black">Ending Soon</option>
                <option className="text-black">Newest</option>
                <option className="text-black">Price: Low to High</option>
              </select>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default MarketPlaceDetail;
