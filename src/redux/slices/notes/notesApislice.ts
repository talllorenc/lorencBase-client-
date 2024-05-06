import { api } from "@/app/api/api";

export const notesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    // getAll: builder.query({
    //   query: (filter) => ({
    //     url: "/notes",
    //     method: "GET",
    //     params: filter,
    //   }),
    // }),
    getAll: builder.query<any, { page: number; perPage: number }>({
      query: (arg) => {
        const { page, perPage } = arg;
        return {
          url: 'notes/',
          params: { page, perPage },
        };
      },
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
    delete: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
    }),
    likeNote: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}/like`,
        method: "PATCH",
      }),
    }),

    unlikeNote: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}/unlike`,
        method: "PATCH",
      }),
    }),
    favoriteAdd: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}/favoriteAdd`,
        method: "PATCH",
      }),
    }),
    favoriteRemove: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}/favoriteRemove`,
        method: "PATCH",
      }),
    }),
    searchNote: builder.query({
      query: (query) => ({
        url: `/search`,
        method: "GET",
        params: query,
      }),
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetOneBySlugQuery,
  useCreateNoteMutation,
  useDeleteMutation,
  useLikeNoteMutation,
  useUnlikeNoteMutation,
  useFavoriteAddMutation,
  useFavoriteRemoveMutation,
  useSearchNoteQuery,
} = notesApiSlice;
