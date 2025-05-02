import { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme/dark";
import { lightTheme } from "../styles/theme/light";

interface ThemeContextType {
  theme: string;
  toogleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  function toogleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("userTheme", newTheme);
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem("userTheme");

    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
