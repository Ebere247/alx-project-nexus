import { useState } from "react";
import useSWR from "swr";
import Dropdown from "@/components/common/DropDown";
import Sidebar from "@/components/common/Sidebar";
import Pagination from "@/components/common/Pagination";
import fetcher from "@/lib/fetcher";
import { Product } from "@/interfaces";

export default function ProductsPage() {
  const [sortOption, setSortOption] = useState<string>("Featured");
  const [category, setCategory] = useState<string>("All");
  const [availability, setAvailability] = useState<
    "all" | "in-stock" | "out-of-stock"
  >("all");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  // console.log(products)
  const buildQuery = () => {
    const params = new URLSearchParams();
    if (category && category !== "All") params.append("category", category);
    if (availability && availability !== "all")
      params.append("availability", availability);
    if (minPrice !== null) params.append("minPrice", String(minPrice));
    if (maxPrice !== null) params.append("maxPrice", String(maxPrice));
    if (sortOption && sortOption !== "Featured")
      params.append("sort", sortOption);
    return params.toString();
  };

  const endpoint = `/api/products?${buildQuery()}`;
  const { data: products, error } = useSWR<Product[]>(endpoint, fetcher, {
    revalidateOnFocus: false,
  });

  const mapAvailability = (
    value: string
  ): "all" | "in-stock" | "out-of-stock" => {
    switch (value) {
      case "All":
        return "all";
      case "In stock":
        return "in-stock";
      case "Out of stock":
        return "out-of-stock";
      default:
        return "all";
    }
  };

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl">
        Failed to load products
      </div>
    );
  if (!products)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-xl">
        Loading products...
      </div>
    );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">All Products</h1>
        <Dropdown
          label="Sort by"
          options={[
            "Featured",
            "Price: Low to High",
            "Price: High to Low",
            "Newest",
          ]}
          defaultValue="Featured"
          onChange={(val) => setSortOption(val)}
        />
      </div>

      <div className="flex flex-col md:flex-row mt-8 gap-6">
        <aside className="w-full md:w-1/4">
          <Sidebar
            onCategoryChange={(cat) => setCategory(cat)}
            onAvailabilityChange={(value) =>
              setAvailability(mapAvailability(value))
            }
            onPriceChange={(min, max) => {
              setMinPrice(min ?? null);
              setMaxPrice(max ?? null);
            }}
          />
        </aside>

        <main className="w-full md:w-3/4">
          <Pagination
            products={products}
            sortOption={sortOption}
            category={category}
            availability={availability}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </main>
      </div>
    </div>
  );
}
