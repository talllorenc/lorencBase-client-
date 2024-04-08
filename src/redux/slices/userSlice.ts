import { userApi } from "@/services/user.service";
import { ILoginUser } from "@/types/AuthFormData";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  user: ILoginUser | null;
  token?: string;
  isAuthenticated: boolean;
}

const initialState: IInitialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true
        }).addMatcher(userApi.endpoints.profile.matchFulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload
        })
    },
})

export const { logout } = userSlice.actions
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectCurrentUser = (state: RootState) => state.user.user;
export default userSlice.reducer;