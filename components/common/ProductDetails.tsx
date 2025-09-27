import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Product, CartItem } from "@/interfaces";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import { normalizePrice } from "@/utils/price";

interface Props {
  product: Product;
}

const ProductDetails: FC<Props> = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">Product not found.</div>
    );
  }

  const price = normalizePrice(product.price);
  const totalPrice = price * quantity;

  const handleAddToCart = () => {
    const item: CartItem = {
      id: product.id,
      name: product.name,
      price: Number(price),
      quantity,
      image: product.image,
      flavour: product.flavour,
      size: product.size || "Standard",
      variant: product.size || "Standard",
    };

    dispatch(addToCart(item));
    router.push("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Product Image with Hover Animation */}
      <div className="w-full h-[400px] relative overflow-hidden group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
          priority
        />
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-[56px] leading-[74.8px] font-semibold frank text-[#187C33] mb-4">
            {product.name}
          </h1>
          <p className="text-[#1D1D1D] mb-6 leading-[32.4px] text-[18px]">
            {product.description ||
              "Delicious stuffed pasta with pepper pieces."}
          </p>

          <div className="grid grid-row-2 gap-4 border-t pt-4 mb-6 leading-[32.4px] text-[21px] font-semibold text-[#1D1D1D] space-y-6 nunito space-x-6">
            <p className="flex gap-6 text-[#187C33]">
              <span className="text-[#1D1D1D]">Price:</span> $
              {price.toLocaleString()}
            </p>
            <p className="flex gap-6 text-[#187C33]">
              <span className="text-[#1D1D1D]">Flavour:</span> {product.flavour}
            </p>
            <p className="flex gap-14 text-[#187C33]">
              <span className="text-[#1D1D1D]">Size:</span> {product.size}
            </p>
            <p className="flex gap-6">
              <span className="">Vendor:</span> {product.vendor}
            </p>
            <p className="flex gap-12">
              <span className="">Type:</span> {product.type}
            </p>
            <p className="flex gap-6 text-[#187C33]">
              <span className="text-[#1D1D1D]">Availability:</span>{" "}
              {product.availability ? "In stock" : "Out of stock"}
            </p>
          </div>

          <div className="flex items-center gap-14 mb-6">
            <label className="font-bold text-[#1D1D1D] leading-[32.4px] text-[18px]">
              Quantity:
            </label>
            <div className="flex items-center font-bold border-[#18733] rounded overflow-hidden">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 bg-[#187C33] font-bold text-white hover:bg-[#F5681A]"
              >
                -
              </button>
              <span className="px-4 text-[#1D1D1D] leading-[32.4px] text-[18px]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 bg-[#187C33] text-white font-bold hover:bg-[#F5681A]"
              >
                +
              </button>
            </div>
          </div>

          <p className="text-xl font-semibold text-green-700 mb-6">
            Total: ${totalPrice.toLocaleString()}
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <button
            onClick={handleAddToCart}
            className="w-1/4 bg-[#187C33] text-white py-3 px-2 rounded-full text-[18px] font-medium hover:bg-[#F5681A] transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => router.push("/cart")}
            className="w-1/4 bg-[#187C33] text-white py-3 rounded-full text-[18px] font-medium hover:bg-[#F5681A] transition"
          >
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
