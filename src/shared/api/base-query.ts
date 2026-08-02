// src/shared/api/base-query.ts

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { env } from "@/app/config";

export const baseQuery = fetchBaseQuery({
  baseUrl: env.apiBaseUrl,

  credentials: "include",

  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");

    return headers;
  },
});
