"use client";

import { FAQAccordion } from "@/app/components/FAQAccordion";
import ProductCard from "@/app/components/ProductCard";
import FeedbackSection from "@/app/components/Testimonial";
import Image from "next/image";
import { useState } from "react";

const thumbnails = [
  "/images/earpods.png",
  "/images/earpods.png",
  "/images/earpods.png",
  "/images/earpods.png",
  "/images/earpods.png",
];
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
const faqs = [
  {
    question: "How does this work?",
    answer:
      "You purchase entries for a chance to win. Once all entries are sold or the draw ends, a winner is selected fairly and transparently.",
  },
  {
    question: "Is this a guaranteed purchase of the product?",
    answer:
      "No. This is a competition-based entry system. Purchasing an entry does not guarantee winning the product.",
  },
  {
    question: "How many entries are available for each item?",
    answer:
      "Each product has a fixed number of entries, which you can see on the product page.",
  },
  {
    question: "How is the winner selected?",
    answer:
      "Winners are selected using a provably fair and randomized draw system.",
  },
  {
    question: "When will the draw end?",
    answer:
      "The draw ends when all entries are sold or the countdown timer reaches zero.",
  },
  {
    question: "Can I buy more than one entry?",
    answer:
      "Yes, you can purchase multiple entries to increase your chances of winning.",
  },
];


const ProductDetailPage = () => {
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(thumbnails[0]);

  return (
    <>
    <section className="w-full px-4 sm:px-6 lg:px-10 p-10 ">
      <div className="lg:px-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT IMAGE GALLERY */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-105 rounded-2xl overflow-hidden">
            <Image
              src={activeImage}
              alt="AirPods Pro"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex gap-3">
            {thumbnails.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-16 rounded-xl overflow-hidden border transition ${
                  activeImage === img
                    ? "border-[#F2482D]"
                    : "border-white/10"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center gap-6 text-white">

          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#F2482D]">
            AirPods Pro
          </h1>

          <span className="text-xl font-bold text-[#F2482D]">
            17 Tickets
          </span>

          <p className="text-lg font-medium text-gray-300 leading-6 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="text-sm text-gray-400">
            <span className="block text-xs text-gray-500">Available Entries</span>
            20/500*
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">Quantity</span>

            <div className="flex items-center gap-4 px-4 py-2 border border-white/10 rounded-lg">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="text-lg"
              >
                −
              </button>
              <span className="text-sm">{qty.toString().padStart(2, "0")}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-4 w-full max-w-sm py-3 bg-[#F2482D] rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#e13f26] transition">
            Enter to Win →
          </button>
        </div>
      </div>
    </section>
    <section className="w-full p-10 rounded-4xl flex flex-col gap-7">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-[#F2482D] bricolage text-4xl font-extrabold ">
            More Items
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-10 ">
  <div className=" mx-auto flex flex-col gap-6">
    <h2 className="text-[#F2482D] text-3xl lg:text-4xl font-extrabold">
      Frequently Asked Questions
    </h2>

    <FAQAccordion faqs={faqs} />
  </div>
</section>
<FeedbackSection />
      </>
  );
};

export default ProductDetailPage;
