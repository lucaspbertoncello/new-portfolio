import { useEffect, useState } from "react";

export default function useToggleTheme() {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () =>
    setTheme((prevState: string) => (prevState === "dark" ? "light" : "dark"));

  useEffect(() => {
    const root = document.documentElement;
    console.log(root);

    return theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return { theme, toggleTheme };
}
