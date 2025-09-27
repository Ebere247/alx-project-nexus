"use client";

import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/interfaces";

interface RandomProductsProps {
  products: Product[];
}

export default function RandomProducts({ products }: RandomProductsProps) {
  // Pick 6 random products
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 9);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Picks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {selected.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
