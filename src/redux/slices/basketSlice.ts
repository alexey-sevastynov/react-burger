import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getBasketFromLocalStorage } from "../../utils/getBasketFromLocalStorage";

export type BasketItem = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  type: string;
  size: number;
};

interface basketSliceState {
  totalPrice: number;
  items: BasketItem[];
}

const initialState: basketSliceState = {
  totalPrice: 0,
  items: getBasketFromLocalStorage(),
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
    },

    minusItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const selectorBasket = (state: RootState) => state.basketSlice;
export const selectorBasketById = (id: string) => (state: RootState) =>
  state.basketSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItems, minusItem } =
  basketSlice.actions;

export default basketSlice.reducer;
