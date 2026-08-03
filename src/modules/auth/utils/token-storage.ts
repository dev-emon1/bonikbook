import { STORAGE_KEYS } from "./storage-keys";

export const tokenStorage = {
  getAccessToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  },

  setAccessToken(token: string): void {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  },

  removeAccessToken(): void {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  },

  clear(): void {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  },
};
