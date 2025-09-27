"use client";

import { useState } from "react";

type DropdownProps = {
  label?: string;
  options?: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export default function Dropdown({
  label = "Sort by",
  options = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"],
  defaultValue = "Featured",
  onChange,
}: DropdownProps) {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value); // call parent handler if passed
  };

  return (
    <div className="flex items-center gap-2">
      {label && (
        <label htmlFor="dropdown" className="text-sm font-medium text-gray-700">
          {label}:
        </label>
      )}

      <select
        id="dropdown"
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
        className="block w-48 border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F5681A] focus:border-[#F5681A] cursor-pointer"
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
