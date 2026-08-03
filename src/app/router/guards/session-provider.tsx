import { useEffect, type ReactNode } from "react";

import { useLazyMeQuery } from "@/modules/auth/api";
import {
  resetAuth,
  setEmailVerified,
  setInitialized,
  setUser,
} from "@/modules/auth/store";
import { tokenStorage } from "@/modules/auth/utils";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { selectIsInitialized } from "@/modules/auth/store";

type Props = {
  children: ReactNode;
};

export function SessionProvider({ children }: Props) {
  const dispatch = useAppDispatch();

  const isInitialized = useAppSelector(selectIsInitialized);

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

  if (!isInitialized) {
    return null;
  }

  return children;
}
