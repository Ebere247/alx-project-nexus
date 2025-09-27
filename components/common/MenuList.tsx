import { FC } from "react";
import { products } from "@/constants/products";

interface MenuListProps {
  onSelect: (id: number) => void;
  selectedId: number;
}

const MenuList: FC<MenuListProps> = ({ onSelect, selectedId }) => {
  return (
    <aside className="w-full md:w-64 bg-gray-100 p-4">
      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className={`cursor-pointer p-2 rounded ${
              selectedId === product.id ? "bg-green-200" : "hover:bg-green-100"
            }`}
            onClick={() => onSelect(product.id)}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MenuList;
