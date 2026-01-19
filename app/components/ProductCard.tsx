"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: {
    title: string;
    description: string;
    tickets: number;
    left: string;
    image: string;
  };
}

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <div className="bg-black rounded-2xl flex flex-col gap-4 lg:gap-5 pb-4 lg:pb-6">
      {/* IMAGE */}
      <div className="relative h-52 sm:h-60 lg:h-64 rounded-2xl overflow-hidden p-2.5">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-2xl"
        />

        <div className="absolute top-3 right-3 lg:top-4 lg:right-4 px-3 py-1.5 lg:px-4 lg:py-2 bg-white rounded-[10px]">
          <span className="text-black text-xs font-bold">50:24:36</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-4 lg:px-6 flex flex-col gap-3 lg:gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-start lg:items-center gap-2">
            <h3 className="text-surface-light text-white text-lg lg:text-xl font-bold">
              {product.title}
            </h3>
            <span className="text-black text-xs font-bold whitespace-nowrap">
              {product.left}
            </span>
          </div>

          <p className=" text-white text-sm leading-5 lg:leading-6">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span className="text-primary-red text-lg lg:text-xl font-bold">
            {product.tickets} Tickets
          </span>

          <button
            onClick={() => router.push("/user/product/32")}
            className="h-10 px-6 lg:px-9 py-2 lg:py-4 bg-primary-red rounded-[10px] flex items-center gap-2 lg:gap-3"
          >
            <span className="text-white text-sm lg:text-base font-medium">
              Enter
            </span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
