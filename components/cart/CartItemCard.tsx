import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { removeFromCart, updateQuantity } from "@/store/slices/cartSlice";
import { CartItemCardProps } from "@/interfaces";
import { normalizePrice } from "@/utils/price";

export default function CartItemCard({
  id,
  name,
  price,
  image,
  quantity,
  variant,
}: CartItemCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const unitPrice = normalizePrice(price);
  const lineTotal = unitPrice * quantity;

  const increaseQty = () =>
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));

  const decreaseQty = () =>
    quantity > 1 && dispatch(updateQuantity({ id, quantity: quantity - 1 }));

  const handleRemove = () => dispatch(removeFromCart(id));

  return (
    <li className="flex items-start justify-between gap-4 border-b pb-4">
      {/* Thumbnail */}
      <div className="w-16 h-16 relative flex-shrink-0">
        <Image
          src={image || "/assets/images/bread-omelet.png"}
          alt={name}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{variant || "Standard"}</p>
        <p className="mt-1 text-gray-800 font-medium">
          ${unitPrice.toFixed(2)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={decreaseQty}
            className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 disabled:opacity-50"
            disabled={quantity === 1}
          >
            –
          </button>
          <span className="px-2">{quantity}</span>
          <button
            onClick={increaseQty}
            className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
          >
            +
          </button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="text-right">
        <p className="font-semibold text-gray-900">${lineTotal.toFixed(2)}</p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:underline text-xs mt-2"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
