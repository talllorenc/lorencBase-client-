import { api } from "@/app/api/api";

export const usersApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: "/users/profile",
        
      }),
    }),
  }),
});

export const { useProfileQuery } = usersApiSlice;
