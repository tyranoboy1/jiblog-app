import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";

interface IBlogInitialState {
  isAuthenticated: boolean;
  isShowModal: boolean;
}

const auth = getAuth(app);

const initialState: IBlogInitialState = {
  isAuthenticated: !!auth?.currentUser,
  isShowModal: false,
};
export const blogSlice = createSlice({
  name: "blogSilce",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setIsShowModal: (state, action: PayloadAction<boolean>) => {
      state.isShowModal = action.payload;
    },
  },
});

export default blogSlice;
