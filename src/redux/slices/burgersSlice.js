import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBurgers = createAsyncThunk(
  "burgers/fetchBurgersStatus",
  async (params) => {
    const { showSortName, ascOrDesc, categoryId, page } = params;

    const url = new URL(`https://644d7bc1cfdddac970a58e8c.mockapi.io/items`);

    url.searchParams.append("sortBy", `${showSortName}`);
    url.searchParams.append("order", `${ascOrDesc}`);

    if (categoryId > 0) {
      url.searchParams.append("category", `${categoryId}`);
    }

    //tagination
    url.searchParams.append("completed", false);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", 4);

    const resposne = await axios.get(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    return resposne.data;
  }
);

const initialState = {
  items: [],
  status: "loading", // loading | success | error
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    // response going!
    [fetchBurgers.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    // responce OK!
    [fetchBurgers.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    // responce ERROR!
    [fetchBurgers.rejected]: (state, action) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const { setItems } = burgersSlice.actions;

export default burgersSlice.reducer;
