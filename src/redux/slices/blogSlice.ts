import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBlogInitialState {
  isAuthenticated: boolean;
}

const initialState: IBlogInitialState = {
  isAuthenticated: false,
};
export const blogSlice = createSlice({
  name: "blogSilce",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export default blogSlice;
