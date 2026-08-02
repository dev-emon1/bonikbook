import { AUTH_STORAGE_KEY } from "../constants";
import type { AuthSession } from "../types";

function parseSession(value: string): AuthSession | null {
  try {
    return JSON.parse(value) as AuthSession;
  } catch {
    return null;
  }
}

export function saveSession(session: AuthSession, remember = true): void {
  const storage = remember ? localStorage : sessionStorage;

  localStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_STORAGE_KEY);

  storage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function getSession(): AuthSession | null {
  const value =
    localStorage.getItem(AUTH_STORAGE_KEY) ??
    sessionStorage.getItem(AUTH_STORAGE_KEY);

  if (!value) {
    return null;
  }

  const session = parseSession(value);

  if (!session) {
    clearSession();
    return null;
  }

  return session;
}

export function clearSession(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
}
