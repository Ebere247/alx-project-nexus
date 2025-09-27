import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";

export default function FeaturedMenu() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/assets/images/bg-image.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay (optional, for readability) */}
      <div className="absolute inset-0"></div>

      {/* Text content */}
      <div
        className="relative z-10 flex justify-end
       items-start h-full px-8 md:px-20 py-16 text-[#1D1D1D]"
      >
        <div className="max-w-md text-right space-y-4">
          <p className="shadows italic tracking-tight text-[30px] leading-[33px] text-base justify-start">
            Dishes
          </p>
          <h1 className="text-[50px] md:text-5xl font-bold leading-[55px] text-[#187C33]">
            Fresh Flavors, Made Daily
          </h1>
          <p className="Nunito text-[18px] md:text-lg leading-[32.4px]">
            From hearty breakfasts to savory dinners, enjoy dishes crafted with
            love, freshness, and a touch of tradition. Every meal tells a story
            of flavor and passion.
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-secondary">Menu</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
