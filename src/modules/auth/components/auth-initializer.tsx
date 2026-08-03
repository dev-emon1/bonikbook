import { useEffect, type ReactNode } from "react";

import { useLazyMeQuery } from "../api";
import {
  resetAuth,
  selectIsInitialized,
  setEmailVerified,
  setInitialized,
  setUser,
} from "../store";
import { tokenStorage } from "../utils";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";

type Props = {
  children: ReactNode;
};

export function AuthInitializer({ children }: Props) {
  const dispatch = useAppDispatch();

  const initialized = useAppSelector(selectIsInitialized);

  const [getMe] = useLazyMeQuery();

  useEffect(() => {
    const initialize = async () => {
      const token = tokenStorage.getAccessToken();

      if (!token) {
        dispatch(setInitialized(true));
        return;
      }

      try {
        const response = await getMe().unwrap();

        dispatch(setUser(response.user));
        dispatch(setEmailVerified(response.email_verified));
      } catch {
        tokenStorage.clear();
        dispatch(resetAuth());
      } finally {
        dispatch(setInitialized(true));
      }
    };

    initialize();
  }, [dispatch, getMe]);

  if (!initialized) {
    return null;
  }

  return children;
}
