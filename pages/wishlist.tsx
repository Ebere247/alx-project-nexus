import Layout from "@/components/layout/Layout";
import WishlistList from "@/components/common/WishlistList";

export default function WishlistPage() {
  return (
    <Layout>
      <title>Your Wishlist - Shop</title>
      <meta
        name="description"
        content="View items you saved to your wishlist."
      />
      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        <WishlistList />
      </section>
    </Layout>
  );
}
