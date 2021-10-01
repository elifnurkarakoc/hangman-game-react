import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

let themeLocal = localStorage.getItem("hangman-theme");
//theme change is kept in local storage, default value:"ligth"
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    themeLocal === null ? "light" : themeLocal
  );
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("hangman-theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("hangman-theme", "light");
    }
  };

  const values = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
