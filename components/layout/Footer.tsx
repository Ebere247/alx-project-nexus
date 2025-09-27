import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#34967C] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & About */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/footer-logo.png"
              alt="Orgaas Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
          <p className="text-sm mb-4">
            Orgaas was founded in 2004 with the aim of serving healthy foods.
          </p>
          <div className="flex gap-3">
            <Twitter className="w-5 h-5 cursor-pointer" />
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Linkedin className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Service */}
        <div>
          <h3 className="font-semibold mb-3">Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/jobs">Job Opportunities</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> No: 58 A, East Madison Street,
              Baltimore, MD, USA 4508
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 0000 - 123 - 456789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@example.com
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/help">Help</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/support-center">Support Center</Link>
            </li>
          </ul>
        </div>

        {/* Insta Gallery Placeholder */}
        <div>
          <h3 className="font-semibold mb-3">Insta Gallery</h3>
          <p className="text-sm">[Gallery images will go here]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
