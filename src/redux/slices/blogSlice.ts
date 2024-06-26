import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";

interface IBlogInitialState {
  isAuthenticated: boolean;
}

const auth = getAuth(app);

const initialState: IBlogInitialState = {
  isAuthenticated: !!auth?.currentUser,
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
