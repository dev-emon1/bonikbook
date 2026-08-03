import { tokenStorage } from "./token-storage";

export const isAuthenticated = (): boolean => {
  return !!tokenStorage.getAccessToken();
};

export const clearAuthSession = (): void => {
  tokenStorage.clear();
};
