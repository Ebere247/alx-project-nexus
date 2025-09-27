import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";

export const SearchIcon = () => (
  <FiSearch className="text-xl cursor-pointer  bg-[#187C33] hover:bg-[#F2391F] p-2 rounded-full text-bold text-white" />
);
export const CartIcon = () => (
  <FiShoppingCart className="text-xl  bg-[#187C33] cursor-pointer hover:bg-[#F2391F] p-2 rounded-full" />
);
export const LoveIcon = () => (
  <FiHeart className="text-xl cursor-pointer  bg-[#187C33] hover:bg-[#F2391F] p-2 rounded-full" />
);
