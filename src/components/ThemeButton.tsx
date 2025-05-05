import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="cursor-pointer z-[99] hover:rotate-360 transition-all text-font-light dark:text-font-dark fixed bottom-10 right-10"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
