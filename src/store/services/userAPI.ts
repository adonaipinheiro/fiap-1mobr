import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import type { GithubUser, GithubUserRepos } from "./types";
//import { RootState } from "..";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
    /*prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },*/
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<GithubUser, string>({
      query: (userName: string) => `users/${userName}`,
    }),
    getUserRepos: builder.query<GithubUserRepos[], string>({
      query: (userName: string) =>
        `users/${userName}/repos`,
    }),
  }),
});

export const {
  useLazyGetUserInfoQuery,
  useLazyGetUserReposQuery,
  useGetUserInfoQuery,
} = userAPI;
