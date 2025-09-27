import Head from "next/head";
import Layout from "@/components/layout/Layout";
import WishlistList from "@/components/common/WishlistList";

export default function WishlistPage() {
  return (
    <Layout>
      <Head>
        <title>Your Wishlist - Shop</title>
        <meta
          name="description"
          content="View items you saved to your wishlist."
        />
      </Head>
      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        <WishlistList />
      </section>
    </Layout>
  );
}
