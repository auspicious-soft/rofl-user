import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import Link from "next/link";

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

export default function FeaturedProducts() {
  return (
    <section className="w-full px-5 py-10  lg:p-10 rounded-4xl flex flex-col gap-7">
      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-[#F2482D] bricolage text-4xl font-extrabold ">
          Featured Items
        </h2>

        <Link href={"/user/marketplace"} className="h-12 px-9 py-4 bg-[#F2482D] rounded-[10px] flex items-center gap-3">
          <span className="text-surface-light text-base font-medium">
            View All Items
          </span>
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
