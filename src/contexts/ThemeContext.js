import { useState, createContext, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      }
    const values= {
        theme,
        toggleTheme
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>

}

export const useTheme = () => useContext(ThemeContext);

