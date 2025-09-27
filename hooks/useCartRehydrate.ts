import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CartItem } from "@/interfaces";
import { addToCart, clearCart } from "@/store/slices/cartSlice";

/**
 * Hook to restore cart state from localStorage when the app mounts.
 * Runs only once to prevent double rehydration.
 */
export default function useCartRehydrate() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        const items: CartItem[] = JSON.parse(stored);

        // Reset before rehydrating
        dispatch(clearCart());
        items.forEach((item) => dispatch(addToCart(item)));
      }
    } catch (err) {
      console.error("Failed to rehydrate cart:", err);
    }
  }, [dispatch]);
}
