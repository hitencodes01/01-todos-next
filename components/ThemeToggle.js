"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-800 text-white dark:bg-yellow-400 dark:text-black rounded"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
