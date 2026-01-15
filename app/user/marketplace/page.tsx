"use client";
import BreadCrumb from "@/app/components/BreadCrumb";
import ProductCard from "@/app/components/ProductCard";
import { ArrowRight } from "lucide-react";
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
const MarketPlace = () => {
  const [standardListing, setStandardListing] = useState(false);
  return (
    <>
      <BreadCrumb title="Marketplace" badgeText="Experience Pure Excitement" />
      <section className="w-full p-10 rounded-4xl flex flex-col gap-7">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-[#F2482D] bricolage text-4xl font-extrabold ">
            Rofl Hosted
          </h2>

          <button className="h-12 px-9 py-4 bg-[#F2482D] rounded-[10px] flex items-center gap-3">
            <span className="text-surface-light text-base font-medium">
              Show More
            </span>
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="w-full p-10 rounded-4xl flex flex-col gap-7">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-[#F2482D] bricolage text-4xl font-extrabold ">
            Premier
          </h2>

          <button className="h-12 px-9 py-4 bg-[#F2482D] rounded-[10px] flex items-center gap-3">
            <span className="text-surface-light text-base font-medium">
              Show More
            </span>
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
        {standardListing && (
        <section className="w-full p-10 rounded-4xl flex flex-col gap-7">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#F2482D] bricolage text-4xl font-extrabold ">
         Standard Listing
        </h2>

        <button className="h-12 px-9 py-4 bg-[#F2482D] rounded-[10px] flex items-center gap-3">
          <span className="text-surface-light text-base font-medium">
            Show More
          </span>
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
      )}
      {!standardListing ? (
        <div className="flex justify-center mb-8">
          <button
          onClick={()=> setStandardListing(true)}
           className="h-10 px-9 py-4 bg-[#F2482D] rounded-[10px] flex items-center gap-3">
            <span className="text-white text-base font-medium">
              View Standard Listing
            </span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      ):(
         <div className="flex justify-center mb-8">
          <button
          onClick={()=> setStandardListing(false)}
           className="h-10 px-9 py-4 bg-[#F2482D] rounded-[10px] flex items-center gap-3">
            <span className="text-white text-base font-medium">
              Close Standard Listing
            </span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default MarketPlace;
