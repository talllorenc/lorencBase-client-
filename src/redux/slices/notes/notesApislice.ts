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
    likeNote: builder.mutation({
      query: (slug) => ({
        url: `/notes/${slug}/like`,
        method: "PATCH",
      }),
    }),

    unlikeNote: builder.mutation({
      query: (slug) => ({
        url: `/notes/${slug}/unlike`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetOneBySlugQuery,
  useCreateNoteMutation,
  useLikeNoteMutation,
  useUnlikeNoteMutation,
} = notesApiSlice;
