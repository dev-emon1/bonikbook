// src/shared/api/base-api.ts

import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./base-query";
import { tagTypes } from "./tag-types";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery,

  tagTypes: [...tagTypes],

  endpoints: () => ({}),
});
