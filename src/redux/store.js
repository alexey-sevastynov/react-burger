import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";

export const store = configureStore(
  {
    reducer: { filterSlice, basketSlice },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
