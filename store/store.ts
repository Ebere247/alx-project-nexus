// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "@/store/slices/productSlice";
// import cartReducer from "@/store/slices/cartSlice";
// import orderReducer from "./slices/orderSlice";

// export const store = configureStore({
//   reducer: {
//     products: productReducer,
//     cart: cartReducer,
//     order: orderReducer,
//   },
// });

// // Types for TS
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
