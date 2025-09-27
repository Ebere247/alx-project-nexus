import { useRouter } from "next/router";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          ✅ Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order is being processed and will be
          delivered soon.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/products")}
            className="bg-green-700 text-white w-full py-3 rounded-full font-semibold hover:bg-green-800"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-gray-200 text-gray-800 w-full py-3 rounded-full font-semibold hover:bg-gray-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
