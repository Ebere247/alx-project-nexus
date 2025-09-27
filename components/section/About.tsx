// components/sections/About.tsx
import Image from "next/image";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Chef Image */}
        <div className="flex justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
            <Image
              src="/assets/images/chef.png"
              alt="Chef"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-2xl mx-auto px-4 flex-1 text-center md:text-left">
          <p className="shadows text-[18px] leading-[32.4px] italic text-[#1D1D1D] font">
            About Us
          </p>
          <h2 className="text-[50px] frank text-[#187C33] leading-[55px] font-bold mb-4">
            New, nutritious, organic sweetest food
          </h2>
          <p className="text-[#1D1D1D] font-nunito text-[18px] leading-[32.4px] mb-6">
            Our meals are more than just food, they are memories shared around
            the table. Each dish is crafted with fresh ingredients, traditional
            flavors, and a touch of innovation to bring families and friends
            together. From hearty classics to new favorites, every bite tells
            the story of warmth, care, and celebration.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="w-full hover:secondary md:w-auto"
            onClick={() => router.push("/products")}
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
