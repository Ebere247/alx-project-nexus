import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";

export const SearchIcon = () => (
  <FiSearch
    size={30}
    className="cursor-pointer bg-[#187C33] hover:bg-[#F2391F] p-2 rounded-full text-white font-bold"
  />
);
export const CartIcon = () => (
  <FiShoppingCart
    size={30}
    className="cursor-pointer bg-[#187C33] hover:bg-[#F2391F] p-2 rounded-full text-white font-bold"
  />
);
export const LoveIcon = () => (
  <FiHeart
    size={30}
    className="cursor-pointer bg-[#187C33] hover:bg-[#F2391F] p-2 rounded-full text-white font-bold"
  />
);
