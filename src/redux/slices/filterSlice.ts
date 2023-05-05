import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SortItem = {
  sortProperty: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
  name: string;
};

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  page: number;
  sort: SortItem;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  page: 1,
  sort: {
    name: "popular (DESC)",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPagePrev: (state, action: PayloadAction<number>) => {
      state.page = action.payload - 1;
    },
    setPageNext: (state, action: PayloadAction<number>) => {
      state.page = action.payload + 1;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectorSort = (state: RootState) => state.filterSlice.sort;
export const selectorFilter = (state: RootState) => state.filterSlice;

export const {
  setCategoryId,
  setSort,
  setPage,
  setPagePrev,
  setPageNext,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
