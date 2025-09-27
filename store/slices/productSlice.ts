// store/slices/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/interfaces";
import { products as constantProducts } from "@/constants/products";

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
  filter: {
    type?: string;
    flavour?: string;
    vendor?: string;
  };
  sort: "asc" | "desc" | null;
}

const initialState: ProductState = {
  items: constantProducts, // load from constants instead of API
  loading: false,
  error: null,
  filter: {},
  sort: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        key: "type" | "flavour" | "vendor";
        value: string;
      }>
    ) => {
      state.filter[action.payload.key] = action.payload.value;
    },
    clearFilter: (state) => {
      state.filter = {};
    },
    setSort: (state, action: PayloadAction<"asc" | "desc" | null>) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, clearFilter, setSort } = productSlice.actions;

// ✅ selector: filtered + sorted products
export const selectFilteredSortedProducts = (state: {
  products: ProductState;
}) => {
  let filtered = [...state.products.items];

  const { type, flavour, vendor } = state.products.filter;

  if (type) filtered = filtered.filter((p) => p.type === type);
  if (flavour) filtered = filtered.filter((p) => p.flavour === flavour);
  if (vendor) filtered = filtered.filter((p) => p.vendor === vendor);

  // convert price to number before sorting
  if (state.products.sort === "asc") {
    filtered.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (state.products.sort === "desc") {
    filtered.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return filtered;
};

export default productSlice.reducer;
