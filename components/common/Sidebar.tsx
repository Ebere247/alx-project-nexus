import { useState, useMemo } from "react";
import { products } from "@/constants/products";

type SidebarProps = {
  onCategoryChange?: (category: string) => void;
  onAvailabilityChange?: (
    availability: "all" | "in-stock" | "out-of-stock"
  ) => void;
  onPriceChange?: (min: number | null, max: number | null) => void;
};

export default function Sidebar({
  onCategoryChange,
  onAvailabilityChange,
  onPriceChange,
}: SidebarProps) {
  // derive categories from products (keeps in-sync with your constant)
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.type || "Other"));
    return ["All", ...Array.from(set)];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedAvailability, setSelectedAvailability] =
    useState<string>("All");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleCategory = (cat: string) => {
    setSelectedCategory(cat);
    onCategoryChange?.(cat);
  };

  const handleAvailability = (a: string) => {
    setSelectedAvailability(a);
    onAvailabilityChange?.(
      a === "All" ? "all" : a === "In stock" ? "in-stock" : "out-of-stock"
    );
  };

  const applyPrice = () => {
    const min = minPrice === "" ? null : Number(minPrice);
    const max = maxPrice === "" ? null : Number(maxPrice);
    onPriceChange?.(min, max);
  };

  const resetPrice = () => {
    setMinPrice("");
    setMaxPrice("");
    onPriceChange?.(null, null);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      {/* Categories */}
      <h3 className="font-bold mb-3">Categories</h3>
      <ul className="space-y-2 mb-6">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`cursor-pointer px-2 py-1 rounded ${
              selectedCategory === cat
                ? "bg-[#f0f6d9] text-[#187C33]"
                : "text-gray-700 hover:text-[#F5681A]"
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* Availability */}
      <h3 className="font-bold mb-3">Availability</h3>
      <ul className="space-y-2 mb-6">
        {["All", "In stock", "Out of stock"].map((opt) => (
          <li
            key={opt}
            onClick={() => handleAvailability(opt)}
            className={`cursor-pointer px-2 py-1 rounded ${
              selectedAvailability === opt
                ? "bg-[#f0f6d9] text-[#187C33]"
                : "text-gray-700 hover:text-[#F5681A]"
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>

      {/* Price Range */}
      <h3 className="font-bold mb-3">Price</h3>
      <div className="flex gap-2 mb-3">
        <input
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Min"
          type="number"
          className="w-1/2 border rounded px-2 py-1"
        />
        <input
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Max"
          type="number"
          className="w-1/2 border rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={applyPrice}
          className="flex-1 bg-[#187C33] text-white py-2 rounded hover:bg-[#145a28]"
        >
          Apply
        </button>
        <button
          onClick={resetPrice}
          className="flex-1 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
