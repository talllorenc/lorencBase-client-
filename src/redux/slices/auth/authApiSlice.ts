import { api } from "@/app/api/api";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    refresh: builder.query({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshQuery } = authApiSlice;
