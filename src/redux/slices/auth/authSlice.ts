import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  [x: string]: any;
  _id: string;
  likedNotes: any;
  name: string;
  email: string;
  role: string;
}

interface IAuthInitialState {
  user: IUser | null;
}

const initialState: IAuthInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user } = action.payload;
      state.user = user;
    },
    clearCredentials(state) {
      state.user = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: { auth: IAuthInitialState }) => state.auth.user;
