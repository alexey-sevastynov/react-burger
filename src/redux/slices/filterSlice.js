import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  page: 1,
  sort: {
    name: "popular",
    sortProperty: "raiting",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPagePrev: (state, action) => {
      state.page = action.payload - 1;
    },
    setPageNext: (state, action) => {
      state.page = action.payload + 1;
    },
  },
});

export const selectorSort = (state) => state.filterSlice.sort;
export const selectorFilter = (state) => state.filterSlice;

export const {
  setCategoryId,
  setSort,
  setPage,
  setPagePrev,
  setPageNext,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
