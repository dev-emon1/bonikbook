import { baseApi, API_ENDPOINTS } from "@/shared/api";
import type {
  LoginRequest,
  LoginResponse,
  MeResponse,
  SendOtpRequest,
  VerifyOtpRequest,
} from "../types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: API_ENDPOINTS.AUTH.LOGIN,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: API_ENDPOINTS.AUTH.LOGOUT,
        method: "POST",
      }),

      invalidatesTags: ["Auth"],
    }),

    me: builder.query<MeResponse, void>({
      query: () => ({
        url: API_ENDPOINTS.AUTH.ME,
        method: "GET",
      }),

      providesTags: ["Auth"],
    }),

    sendOtp: builder.mutation<void, SendOtpRequest>({
      query: (body) => ({
        url: API_ENDPOINTS.AUTH.OTP.SEND,
        method: "POST",
        body,
      }),
    }),

    verifyOtp: builder.mutation<void, VerifyOtpRequest>({
      query: (body) => ({
        url: API_ENDPOINTS.AUTH.OTP.VERIFY,
        method: "POST",
        body,
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useLazyMeQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
} = authApi;
