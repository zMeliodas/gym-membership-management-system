import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import type { Theme } from "../types/types";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) ?? "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex bg-base-300 border border-outlineColor rounded-lg p-1 gap-1">
      <button
        onClick={() => setTheme("light")}
        className={`flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-medium transition-all ${
          theme === "light"
            ? "bg-base-100 text-primary shadow-sm border border-outlineColor"
            : "text-subtext hover:text-primary"
        }`}
      >
        <FiSun size={12} />
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-medium transition-all ${
          theme === "dark"
            ? "bg-base-100 text-primary shadow-sm border border-outlineColor"
            : "text-subtext hover:text-primary"
        }`}
      >
        <FiMoon size={12} />
        Dark
      </button>
    </div>
  );
};

export default ThemeToggle;