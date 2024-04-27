import { createSlice } from "@reduxjs/toolkit";
import {INoteData} from "@/types/NotesData";

interface IAuthInitialState {
  token: string | null;
  user: INoteData | null;
}

const initialState: IAuthInitialState = {
  token: null,
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, user } = action.payload;
      state.token = accessToken;
      state.user = user;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state : { auth: IAuthInitialState }) => state.auth.token;
export const selectCurrentUser = (state : { auth: IAuthInitialState }) => state.auth.user; 

