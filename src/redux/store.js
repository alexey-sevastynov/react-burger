import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";

export const store = configureStore(
  {
    reducer: { filterSlice },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
