import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";
import burgersSlice from "./slices/burgersSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { filterSlice, basketSlice, burgersSlice },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
