import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/constants/blogPosts";

export default function BlogPage() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="shadows text-[#1D1D1D] leading-[33px] italic text-[30px] ">
          Blog
        </p>
        <h2 className="frank text-[#187C33] text-[68px] md:text-[50px] leading-[78.8px] md:leading-[55px]text-center mb-14">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image wrapped in Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="block relative w-full h-64 overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </Link>

              <div className="p-5">
                <div className="flex items-center text-sm text-gray-600 space-x-4 mb-3">
                  <span>👤 By {post.author}</span>
                  <span>📅 {post.date}</span>
                  <span>💬 {post.comments} Comment</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>

                {/* READ MORE link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-green-700 font-semibold hover:underline"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
