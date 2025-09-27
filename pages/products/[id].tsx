// pages/products/[id].tsx
import { useRouter } from "next/router";
import useSWR from "swr";
import MenuList from "@/components/common/MenuList";
import ProductDetails from "@/components/common/ProductDetails";
import fetcher from "@/lib/fetcher";
import { Product } from "@/interfaces";
import { products } from "@/constants/products";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  // Build full API URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const endpoint = id ? `${baseUrl}/api/products/${id}` : null;

  // Fetch one product from API using SWR
  const { data: product, error } = useSWR<Product>(endpoint, fetcher);

  // Loading state
  if (!product && !error) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-600">
        Loading...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-600">
        Failed to load product
      </div>
    );
  }

  const handleSelect = (id: number) => {
    const selectedProduct = products.find((p) => p.id === id);
    if (selectedProduct) {
      router.push(`/products/${id}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800">
      {/* Sidebar menu */}
      <MenuList
        onSelect={handleSelect}
        selectedId={product?.id || 0} // ✅ matches MenuList prop
      />

      {/* Product details */}
      <main className="flex-1 p-6">
        {product && <ProductDetails product={product} />}
      </main>
    </div>
  );
}
