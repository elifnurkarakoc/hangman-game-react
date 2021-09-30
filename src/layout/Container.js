import React from "react";
import { useTheme } from "@emotion/react";
const Container = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className="w-full bg-white font-mono flex flex-col justify-between min-h-screen mx-auto max-w-3xl">
      {children}
    </div>
  );
};

export default Container;
