import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./base-query";
import { TAG_TYPES } from "./tag-types";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery,

  tagTypes: [...TAG_TYPES],

  endpoints: () => ({}),
});
