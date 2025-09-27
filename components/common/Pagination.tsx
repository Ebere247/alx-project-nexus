import { useState, useEffect, useMemo } from "react";
import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/interfaces";
import { normalizePrice } from "@/utils/price"; // ✅ import helper

type Props = {
  products: Product[];
  sortOption?: string;
  category?: string | null;
  availability?: "all" | "in-stock" | "out-of-stock";
  minPrice?: number | null;
  maxPrice?: number | null;
};

export default function Pagination({
  products = [],
  sortOption = "Featured",
  category = "All",
  availability = "all",
  minPrice = null,
  maxPrice = null,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Apply filters first
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const price = normalizePrice(p.price); // ✅ normalize once here

      if (category && category !== "All" && p.type !== category) return false;

      if (availability === "in-stock") {
        if (typeof p.availability === "boolean") {
          if (!p.availability) return false;
        } else if (typeof p.availability === "string") {
          if (!p.availability.toLowerCase().includes("in")) return false;
        }
      } else if (availability === "out-of-stock") {
        if (typeof p.availability === "boolean") {
          if (p.availability) return false;
        } else if (typeof p.availability === "string") {
          if (p.availability.toLowerCase().includes("in")) return false;
        }
      }

      if (minPrice != null && price < minPrice) return false;
      if (maxPrice != null && price > maxPrice) return false;

      return true;
    });
  }, [products, category, availability, minPrice, maxPrice]);

  // Sort after filtering
  const sortedProducts = useMemo(() => {
    const copy = [...filteredProducts];
    return copy.sort((a, b) => {
      const priceA = normalizePrice(a.price);
      const priceB = normalizePrice(b.price);

      switch (sortOption) {
        case "Price: Low to High":
          return priceA - priceB;
        case "Price: High to Low":
          return priceB - priceA;
        case "Newest":
          return b.id - a.id;
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortOption]);

  // Pagination logic
  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / itemsPerPage)
  );

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
    if (currentPage < 1) setCurrentPage(1);
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems: Product[] = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle loading state AFTER hooks
  if (!products.length) {
    return (
      <div className="p-6 text-center text-gray-500">Loading products...</div>
    );
  }

  return (
    <section className="bg-[#cfde6d] lg:bg-white p-4 rounded-lg">
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {/* Prev */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-full 
            border transition-colors duration-150
            ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
        >
          &lt;
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border
              transition-colors duration-150
              ${
                currentPage === i + 1
                  ? "bg-[#f5671b] text-white border-[#f5671b]"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-full 
            border transition-colors duration-150
            ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
