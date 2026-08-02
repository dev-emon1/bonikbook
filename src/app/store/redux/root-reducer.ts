// src/app/store/redux/root-reducer.ts

import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "@/shared/api";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,

  // Feature reducers
  // auth: authReducer,
  // ui: uiReducer,
});
