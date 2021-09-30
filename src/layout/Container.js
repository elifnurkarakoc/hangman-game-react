import React from "react";
import { useTheme } from "../contexts/ThemeContext";
const Container = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`bg-${theme}-100`}>
    <div className={`bg-${theme}-100 w-full font-mono flex flex-col justify-between min-h-screen mx-auto max-w-3xl`}>
      {children}
    </div>
    </div>
  );
};

export default Container;
