import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  

  return (
    <div>
      <button onClick={toggleTheme} className="" >
        {theme === "dark" ? <span>🌕</span> : <span>🌑</span>}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
