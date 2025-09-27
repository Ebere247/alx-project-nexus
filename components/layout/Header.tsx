import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/constants/products";
import { FiHeart, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  // Redux state
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  // Filtered products for search (simple client-side)
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  // Shared badge styles
  const badgeClasses =
    "absolute -top-2 -right-2 text-white text-xs font-semibold rounded-full px-1.5 py-0.5";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/orgaas-logo.png"
            alt="Orgaas Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-[#F2391F]">
            HOME
          </Link>

          {/* Dropdown Wrapper */}
          <div className="relative">
            <button
              className="hover:text-[#F2391F] flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              SHOP ▾
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <ul className="py-2">
                  {products.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/products/${product.id}`}
                        className="Andika grid grid-row-3 px-4 py-2 text-[#1D1D1D] hover:text-[#F5681A] text-[14px] leading-[40px]"
                        onClick={() => setIsOpen(false)}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-[#F2391F]">
            ABOUT
          </Link>
          <Link href="/blog" className="hover:text-[#F2391F]">
            BLOG
          </Link>
          <Link href="/contact" className="hover:text-[#F2391F]">
            CONTACT
          </Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6 text-[#F2391F]">
          {/* Wishlist */}
          <Link href="/wishlist" className="relative">
            <FiHeart className="w-5 h-5 cursor-pointer hover:text-[#187C33]" />
            {wishlistCount > 0 && (
              <span className={`${badgeClasses} bg-[#F2391F]`}>
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Search */}
          <button onClick={() => setShowSearch(!showSearch)}>
            <FiSearch className="w-5 h-5 cursor-pointer hover:text-[#187C33]" />
          </button>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#187C33]" />
            {cartCount > 0 && (
              <span className={`${badgeClasses} bg-[#187C33]`}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toolbar (Wishlist + Cart + Search + Menu Toggle) */}
        <div className="md:hidden flex items-center space-x-4 text-[#F2391F]">
          {/* Wishlist */}
          <Link href="/wishlist" className="relative">
            <FiHeart className="w-6 h-6 cursor-pointer hover:text-[#187C33]" />
            {wishlistCount > 0 && (
              <span className={`${badgeClasses} bg-[#F2391F]`}>
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-[#187C33]" />
            {cartCount > 0 && (
              <span className={`${badgeClasses} bg-[#187C33]`}>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Search */}
          <button onClick={() => setShowSearch(!showSearch)}>
            <FiSearch className="w-6 h-6 cursor-pointer hover:text-[#187C33]" />
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-[#F2391F]">
          <Link href="/" onClick={() => setMobileMenu(false)}>
            HOME
          </Link>

          <details>
            <summary className="cursor-pointer">SHOP</summary>
            <ul className="pl-4 mt-2 space-y-2">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.id}`}
                    onClick={() => setMobileMenu(false)}
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <Link href="/about" onClick={() => setMobileMenu(false)}>
            ABOUT
          </Link>
          <Link href="/blog" onClick={() => setMobileMenu(false)}>
            BLOG
          </Link>
          <Link href="/contact" onClick={() => setMobileMenu(false)}>
            CONTACT
          </Link>
        </div>
      )}

      {/* Search Bar (Dropdown style) */}
      {showSearch && !mobileMenu && (
        <div className="bg-gray-100 px-6 py-3">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          {query && (
            <ul className="bg-white shadow-md mt-2 rounded-md max-h-64 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <li key={p.id} className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      href={`/products/${p.id}`}
                      onClick={() => setShowSearch(false)}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </div>
      )}
    </header>
  );
}
