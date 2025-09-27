import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Product, CartItem } from "@/interfaces";
import { normalizePrice } from "@/utils/price";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductDetails: FC<Props> = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);

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
    <div className="p-6 bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Image */}
      <div className="w-full h-96 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>

      {/* Right: Details */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <p className="text-lg font-semibold mb-4">
          ${totalPrice.toLocaleString()}
        </p>

        <div className="flex items-center mb-6">
          <button
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 bg-gray-200 rounded-l"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded-r"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
