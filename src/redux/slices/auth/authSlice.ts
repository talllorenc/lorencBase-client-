import { createSlice } from "@reduxjs/toolkit";

interface IAuthInitialState {
  token: string | null;
}

const initialState: IAuthInitialState = {
  token: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state : { auth: IAuthInitialState }) => state.auth.token;
