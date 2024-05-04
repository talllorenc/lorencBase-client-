import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { setCredentials } from "@/redux/slices/auth/authSlice";
import {
  saveTokenStorage,
  removeFromStorage,
  getAccessToken,
} from "@/utils/setTokens";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getAccessToken();
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult?.data) {
      saveTokenStorage(refreshResult.data as string);
      api.dispatch(setCredentials({...refreshResult.data}));
      result = await baseQuery(args, api, extraOptions);
    } else {
      removeFromStorage();
    }
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});


