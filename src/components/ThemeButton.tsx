import { Moon, Sun } from "lucide-react";
import useToggleTheme from "../hooks/useToggleTheme";

export default function ThemeButton() {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <button
      className="cursor-pointer hover:rotate-360 transition-all text-font-light dark:text-font-dark absolute bottom-10 right-10"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
