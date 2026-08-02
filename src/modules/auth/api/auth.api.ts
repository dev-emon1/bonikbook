import { baseApi } from "@/services/api/base-api";
import { loginResponse, meResponse, users } from "@/services/mock/auth";

import type { LoginRequest, LoginResponse, MeResponse } from "../types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      async queryFn(payload) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const user = users.find(
          (item) =>
            item.email === payload.email && item.password === payload.password,
        );

        if (!user) {
          return {
            error: {
              status: 401,
              data: {
                message: "Invalid email or password.",
              },
            },
          };
        }

        return {
          data: loginResponse as LoginResponse,
        };
      },
    }),

    me: builder.query<MeResponse, void>({
      async queryFn() {
        await new Promise((resolve) => setTimeout(resolve, 300));

        return {
          data: meResponse as MeResponse,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useLazyMeQuery } = authApi;
