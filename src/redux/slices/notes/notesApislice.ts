import { api } from "@/app/api/api";

export const notesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: "/notes",
      }),
    }),
    getOneBySlug: builder.query({
      query: (slug) => ({
        url: `/notes/${slug}`,
      }),
    }),
    createNote: builder.mutation({
      query: (data) => ({
        url: "/notes",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useGetAllQuery, useGetOneBySlugQuery, useCreateNoteMutation } = notesApiSlice;
