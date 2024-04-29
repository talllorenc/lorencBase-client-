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
    }
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state : { auth: IAuthInitialState }) => state.auth.token;



