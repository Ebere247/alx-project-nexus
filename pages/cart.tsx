import Layout from "@/components/layout/Layout";
import CartList from "@/components/cart/CartList";

export default function CartPage() {
  return (
    <>
      <title>Your Cart - Shop</title>
      <meta
        name="description"
        content="View items in your shopping cart before checkout."
      />

      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <CartList />
      </section>
    </>
  );
}
