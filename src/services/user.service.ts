import { User } from "@/types/AuthFormData";
import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<
      {
        email: string;
        name: string;
        password: string;
        confirmPassword: string;
      },
      { email: string; name: string; password: string; confirmPassword: string }
    >({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    profile: builder.query<User, void>({
      query: () => ({ url: "/auth/profile", method: "GET" }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useProfileQuery,
  useLazyProfileQuery,
} = userApi;

export const {
  endpoints: { login, register, profile },
} = userApi;
