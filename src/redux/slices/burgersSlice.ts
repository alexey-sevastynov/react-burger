import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchBurgers = createAsyncThunk<BurgersItem[], FetchBurgersArgs>(
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
    // @ts-ignore
    url.searchParams.append("completed", false);
    // @ts-ignore
    url.searchParams.append("page", page);
    // @ts-ignore
    url.searchParams.append("limit", 4);
    // @ts-ignore
    const { data } = await axios.get(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    return data;
  }
);

type FetchBurgersArgs = {
  showSortName: string;
  ascOrDesc: string;
  categoryId: number;
  page: number;
};

type BurgersItem = {
  id: string;
  title: string;
  imageUrl: string;
  sizes: number[];
  types: string[];
  typeNames: string[];
  price: number[];
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface BurgersSliceState {
  items: BurgersItem[];
  // status: "loading" | "success" | "error";
  status: Status;
}

const initialState: BurgersSliceState = {
  items: [],
  // status: "loading", // loading | success | error
  status: Status.LOADING,
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<BurgersItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBurgers.pending, (state, action) => {
      // state.status = "loading";
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      state.items = action.payload;
      // state.status = "success";
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBurgers.rejected, (state, action) => {
      state.items = [];
      // state.status = "error";
      state.status = Status.ERROR;
    });
  },

  // extraReducers: {
  //   // response going!
  //   [fetchBurgers.pending]: (state) => {
  //     state.status = "loading";
  //     state.items = [];
  //   },
  //   // responce OK!
  //   [fetchBurgers.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = "success";
  //   },
  //   // responce ERROR!
  //   [fetchBurgers.rejected]: (state, action) => {
  //     state.items = [];
  //     state.status = "error";
  //   },
  // },
});

export const selectorBurgerData = (state: RootState) => state.burgersSlice;

export const { setItems } = burgersSlice.actions;

export default burgersSlice.reducer;
