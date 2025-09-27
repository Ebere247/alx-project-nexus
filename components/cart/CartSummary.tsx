import { useRouter } from "next/router";
import { CartSummaryProps } from "@/interfaces";

export default function CartSummary({ total }: CartSummaryProps) {
  const router = useRouter();

  return (
    <div className="mt-6 border-t pt-4">
      <div className="flex justify-between text-lg font-semibold">
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Shipping, taxes, and discounts will be calculated at checkout.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={() => router.push("/checkout")}
          className="bg-green-700 text-white w-full py-3 rounded-full font-semibold hover:bg-green-800"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => router.push("/products")}
          className="bg-gray-100 text-green-700 w-full py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
