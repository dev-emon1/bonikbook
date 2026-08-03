import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "@/shared/api";
import { authReducer } from "@/modules/auth/store";

export const rootReducer = combineReducers({
  auth: authReducer,

  [baseApi.reducerPath]: baseApi.reducer,
});
