import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import CartItemCard from "@/components/cart/CartItemCard";
import CartSummary from "./CartSummary";

export default function CartList() {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.items);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg mx-auto text-center">
        <h2 className="text-lg font-semibold text-green-700 mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty.</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-lg font-semibold text-green-700 mb-6">Your Cart</h2>

      <ul className="space-y-6">
        {cart.map((item) => (
          <CartItemCard key={item.id} {...item} />
        ))}
      </ul>

      <CartSummary total={total} />
    </div>
  );
}
