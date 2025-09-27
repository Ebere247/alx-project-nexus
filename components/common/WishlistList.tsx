import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromWishlist } from "@/store/slices/wishlistSlice";
import { addToCart } from "@/store/slices/cartSlice";
import { products } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { CartItem } from "@/interfaces";

const WishlistList: FC = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <FiHeart className="w-16 h-16 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-green-700 mb-6">
          Nothing found in wishlist!
        </p>
        <Link
          href="/products"
          className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-5xl mx-auto">
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {wishlistProducts.map((item) => {
          const cartItem: CartItem = {
            id: item.id,
            name: item.name,
            price: Number(item.price),
            quantity: 1,
            image: item.image,
            flavour: item.flavour,
            size: item.size || "Standard",
            variant: item.size || "Standard",
          };

          return (
            <li key={item.id} className="border rounded-lg p-4 shadow-sm">
              <div className="w-full h-40 relative mb-3">
                <Image
                  src={item.image || "/assets/images/bread-omelet.png"}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-gray-700 font-medium">
                ₦ {cartItem.price.toLocaleString()}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => dispatch(addToCart(cartItem))}
                  className="flex-1 bg-green-700 text-white px-3 py-2 rounded hover:bg-green-800 text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded hover:bg-gray-300 text-sm"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WishlistList;
