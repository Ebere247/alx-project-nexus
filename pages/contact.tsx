import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ An error occurred.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Orgaas</title>
      </Head>

      {/* Full-page background */}
      <div className="min-h-screen bg-[#ffdd00] flex items-center justify-center px-6 md:px-20 py-12">
        <div className="w-full max-w-2xl">
          <h1 className="leading-[55px] frank text-[40px] md:text-[50px] mb-4 text-[#187C33] text-center">
            Any Questions?
          </h1>

          {/* Fixed paragraph so it doesn’t overflow */}
          <p className="text-[#1D1D1D] text-[18px] font-nunito leading-[32.4px] mb-10 text-center">
            We’d love to hear from you! Whether you have a question about our
            products, need assistance, or just want to give feedback, our team
            is ready to help.
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white rounded-md px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F2391F]"
            />
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white rounded-md px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F2391F]"
            />
            <input
              type="tel"
              id="phone"
              placeholder="+234 801 234 5678"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white rounded-md px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F2391F]"
            />
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white rounded-md px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F2391F]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#F2391F] text-white font-semibold py-4 px-6 rounded-md hover:bg-red-600 transition-colors"
            >
              Send
            </button>
          </form>

          {status && (
            <p className="mt-6 text-center text-gray-800 font-medium">
              {status}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
