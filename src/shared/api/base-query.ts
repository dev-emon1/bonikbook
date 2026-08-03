import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { env } from "@/app/config";
import { tokenStorage } from "@/modules/auth/utils";
import { resetAuth } from "@/modules/auth/store";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: env.api.baseUrl,

  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");

    const token = tokenStorage.getAccessToken();

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    tokenStorage.clear();

    api.dispatch(resetAuth());
  }

  return result;
};
