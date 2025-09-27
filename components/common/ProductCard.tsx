import Link from "next/link";
import Image from "next/image";
import { Product } from "@/interfaces";
import { normalizePrice } from "@/utils/price";
import { CartIcon, LoveIcon, SearchIcon } from "./Icons";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const price = normalizePrice(product.price);
  console.log(product.name);
  return (
    <Link href={`/products/${product.id}`}>
      <div className="rounded-lg shadow hover:shadow-lg transition cursor-pointer p-4 group">
        {/* Image container */}
        <div className="relative w-full h-48 overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            priority
            className="rounded-lg object-cover w-full h-full transition duration-300 group-hover:opacity-70 group-hover:bg-[#CFDE6E]"
          />

          {/* Overlay button */}
          <button
            className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center 
              rounded-full text-white text-lg font-bold opacity-0 gap-2
              group-hover:opacity-100 transition-all duration-300 transform scale-75 
              group-hover:scale-100 "
          >
            <CartIcon />
            <SearchIcon />
            <LoveIcon />
          </button>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-[#187C33] font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
