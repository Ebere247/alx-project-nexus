import Link from "next/link";
import Image from "next/image";

export default function MealHighlights() {
  return (
    <main className="px-6 md:px-12 lg:px-20 py-12 flex">
      <div className="text-start mb-16 max-w-4xl mx-auto justify-start">
        <p className="dmSerif text-[30px] text-[#1D1D1D] leading-[33px]">
          Dishes
        </p>
        <h1 className="text-[#187C33] leading-[74.8px] text-[68px]">
          Flavorful & Organic dishes everyday we cook here
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto">
        {/* three-column layout on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Card - Breakfast */}
          <article
            className="relative rounded-2xl overflow-visible"
            aria-labelledby="breakfast-title"
          >
            {/* colored card body */}
            <div
              className="bg-[#cfde6d] hover:bg-[#ffdd00] rounded-2xl px-6 pt-32 pb-8 text-left shadow-md"
              // make bottom-right corner more pronounced (approximation)
              style={{ borderBottomRightRadius: 56 }}
            >
              <h3
                id="breakfast-title"
                className="text-2xl frank text-[#1A1A1A] mb-3 text-[30px]"
              >
                Breakfast
              </h3>
              <p className="text-[#1A1A1A] leading-relaxed mb-6 nunito text-[18px]">
                Start your morning with a balanced, flavourful breakfast. Think
                warm oats topped with crunchy granola and fresh berries, or a
                herb-roasted salmon & avocado toast to give you long-lasting
                energy for the day ahead.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#187C33] font-medium"
              >
                Read More <span aria-hidden>→</span>
              </Link>
            </div>

            {/* circular image overlapping the top of the card */}
            <div className="absolute left-6 -top-16 w-44 h-44 rounded-full bg-white p-2 shadow-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/sweety-granola.png"
                alt="Breakfast plate"
                width={176}
                height={176}
                className="object-cover"
                priority
              />
            </div>
          </article>

          {/* Card - Lunch */}
          <article
            className="relative rounded-2xl overflow-visible"
            aria-labelledby="lunch-title"
          >
            <div
              className="bg-[#cfde6d] rounded-2xl px-6 pt-32 pb-8 text-left hover:bg-[#ffdd00] shadow-md"
              style={{ borderBottomRightRadius: 56 }}
            >
              <h3
                id="lunch-title"
                className="frank text[30px] text-[#1A1A1A] mb-3"
              >
                Lunch
              </h3>
              <p className="text-[#1A1A1A] nunito text-[18px] leading-relaxed mb-6">
                Enjoy a light, nourishing lunch designed to refresh and sustain:
                zesty grilled salmon with seasonal vegetables, a vibrant salad
                bowl with roasted root veg, or a savoury ravioli tossed in a
                fresh tomato and basil sauce.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#187C33] font-medium"
              >
                Read More <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="absolute left-6 -top-16 w-44 h-44 rounded-full bg-white p-2 shadow-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/grilled-salmon.png"
                alt="Lunch plate"
                width={176}
                height={176}
                className="object-cover"
                priority
              />
            </div>
          </article>

          {/* Card - Dinner */}
          <article
            className="relative rounded-2xl overflow-visible"
            aria-labelledby="dinner-title"
          >
            <div
              className="bg-[#cfde6d] hover:bg-[#ffdd00] rounded-2xl px-6 pt-32 pb-8 text-left shadow-md"
              style={{ borderBottomRightRadius: 56 }}
            >
              <h3
                id="dinner-title"
                className="text-[30px] text-[#1A1A1A] mb-3 Frank"
              >
                Dinner
              </h3>
              <p className="text-[#1A1A1A] leading-relaxed mb-6 Nunito text-[18px]">
                Wind down with comforting dinner recipes — slow-roasted fish or
                stews, aromatic spices and sides that bring family together,
                finished with fresh herbs and a squeeze of lemon for balance.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#187C33] font-medium"
              >
                Read More <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="absolute left-6 -top-16 w-44 h-44 rounded-full bg-white p-2 shadow-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/fried-noodles.png"
                alt="Dinner plate"
                width={176}
                height={176}
                className="object-cover"
                priority
              />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
