import React from "react";
import { useTheme } from "@emotion/react";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <span>🌞</span> : <span>🌙</span>}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
