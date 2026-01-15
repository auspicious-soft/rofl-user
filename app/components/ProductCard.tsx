import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
  return (
    <div className="bg-surface-dark rounded-2xl outline-black flex flex-col gap-5 pb-6 bg-black">
      {/* IMAGE */}
      <div className="relative h-64 rounded-2xl overflow-hidden p-2.5">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-2xl"
        />

        <div className="absolute top-4 right-4 px-4 py-2 bg-surface-light rounded-[10px]  outline-black bg-white">
          <span className="text-black text-xs font-bold">50:24:36</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 flex flex-col gap-4 ">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h3 className="text-surface-light text-xl font-bold">
              {product.title}
            </h3>
            <span className="text-black text-xs font-bold">
              {product.left}
            </span>
          </div>

          <p className="text-text-muted text-sm leading-6">
            {product.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-primary-red text-xl font-bold">
            {product.tickets} Tickets
          </span>

          <button className="h-10 px-9 py-4 bg-primary-red rounded-[10px] flex items-center gap-3">
            <span className="text-white text-base font-medium">
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
