import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { clearCart } from "@/store/slices/cartSlice";
import { placeOrder } from "@/store/slices/orderSlice";

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.items || []);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayNow = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);

    if (
      !fullName ||
      !email ||
      !street ||
      !city ||
      !cardNumber ||
      !expiry ||
      !cvc
    ) {
      setError(
        "Please complete required contact, shipping and payment fields."
      );
      return;
    }
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const orderItems = cart.map((item) => ({
        id: item.id.toString(),
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      }));

      const order = {
        id: Date.now().toString(),
        items: orderItems,
        total,
        shippingAddress: `${street}, ${city}, ${postalCode}, ${country}`,
        paymentMethod: "Card Payment",
        createdAt: new Date().toISOString(),
      };

      dispatch(placeOrder(order));
      dispatch(clearCart());
      router.push("/order-success");
    }, 1800);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold text-[#187C33]">Checkout</h1>
        <form onSubmit={handlePayNow} className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="font-semibold text-lg">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded p-3 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-3 focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded p-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="font-semibold text-lg">Delivery Address</h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Street address *"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full border rounded p-3 focus:outline-none"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City *"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border rounded p-3 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Postal / ZIP *"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full border rounded p-3 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Country *"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border rounded p-3 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="font-semibold text-lg">Payment (Card)</h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Name on card *"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="w-full border rounded p-3 focus:outline-none"
                required
              />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Card number (no spaces) *"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border rounded p-3 focus:outline-none"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY *"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full border rounded p-3 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="CVC *"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-full border rounded p-3 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>

      <aside className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold text-lg">Order Summary</h2>
        <ul className="divide-y">
          {cart.length === 0 ? (
            <li className="py-4 text-sm text-gray-600">No items in cart.</li>
          ) : (
            cart.map((item) => (
              <li key={item.id} className="flex gap-3 py-3 items-center">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={item.image || "/assets/images/placeholder.png"}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.quantity} × $ {item.price}
                  </p>
                </div>
                <div className="font-semibold">
                  $ {(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))
          )}
        </ul>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <p>Total</p>
            <p>$ {total.toFixed(2)}</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Shipping, taxes and discounts calculated at checkout.
          </p>
        </div>

        <button
          onClick={handlePayNow}
          disabled={loading || cart.length === 0}
          className="mt-4 w-full bg-[#187C33] text-white py-3 rounded-full font-semibold hover:bg-[#145a28] disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        <button
          onClick={() => router.push("/products")}
          className="mt-2 w-full bg-gray-100 text-[#187C33] py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Continue Shopping
        </button>
      </aside>
    </div>
  );
}
