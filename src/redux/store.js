import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";
import burgersSlice from "./slices/burgersSlice";

export const store = configureStore({
  reducer: { filterSlice, basketSlice, burgersSlice },
});
