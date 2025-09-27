// pages/index.tsx
import { GetStaticProps } from "next";
import Hero from "@/components/section/Hero";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
import About from "@/components/section/About";
import Meals from "@/components/section/MealHighlights";
import FeaturedMenu from "@/components/section/FeaturedMenu";
import RandomProducts from "@/components/section/RandomProducts";
import { Product } from "@/interfaces";
import { products as constantProducts } from "@/constants/products";

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <About />
      <Meals />
      <FeaturedMenu />
      <RandomProducts products={products} />
      {/* <Footer /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: constantProducts,
    },
  };
};
