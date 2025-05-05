import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () =>
    setTheme((prevState: string) => (prevState === "dark" ? "light" : "dark"));

  useEffect(() => {
    const root = document.documentElement;

    return theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
