import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
  createdAt: string;
}

interface OrderState {
  lastOrder: Order | null;
}

const initialState: OrderState = {
  lastOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Order>) => {
      state.lastOrder = action.payload;
    },
    clearOrder: (state) => {
      state.lastOrder = null;
    },
  },
});

export const { placeOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
