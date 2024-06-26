import { combineReducers } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";

export const rootReducer = combineReducers({
  blog: blogSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
