// components/sections/Hero.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { heroSlides } from "@/constants/heroSlides";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            sizes="100vw"
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center">
            <div className="text-left text-white max-w-xl px-8 md:px-20">
              <h1 className="font-frank text-3xl md:text-6xl font-bold leading-tight mb-6">
                {slide.title}
              </h1>
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push("/products")}
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 text-white text-5xl hover:text-[#F2391F] z-10"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 text-white text-5xl hover:text-[#F2391F] z-10"
      >
        &gt;
      </button>
    </section>
  );
}
