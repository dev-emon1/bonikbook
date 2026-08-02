import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import { ThemeContext, type Theme } from "@/shared/contexts/theme-context";

const STORAGE_KEY = "bonikbook-theme";

const THEMES: Theme[] = ["light", "dark", "system"];

export function ThemeProvider({ children }: PropsWithChildren) {
  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const [theme, setThemeState] = useState<Theme>("system");

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  const applyTheme = useCallback(
    (selected: Theme) => {
      const resolved = selected === "system" ? getSystemTheme() : selected;

      document.documentElement.dataset.theme = resolved;

      document.documentElement.classList.toggle("dark", resolved === "dark");

      setResolvedTheme(resolved);
    },
    [getSystemTheme],
  );

  const setTheme = useCallback(
    (selected: Theme) => {
      localStorage.setItem(STORAGE_KEY, selected);

      setThemeState(selected);

      applyTheme(selected);
    },
    [applyTheme],
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  /**
   * Initial Load
   */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    const initialTheme: Theme =
      stored && THEMES.includes(stored as Theme) ? (stored as Theme) : "system";

    setThemeState(initialTheme);

    applyTheme(initialTheme);
  }, [applyTheme]);

  /**
   * Listen System Theme Changes
   */
  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      applyTheme("system");
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
