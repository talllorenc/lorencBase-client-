import { api } from "./api";

export const notesApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        profile: builder.query({
            query: () => '/users/profile',
        }),
    }),
})

export const { useProfileQuery } = notesApiSlice;