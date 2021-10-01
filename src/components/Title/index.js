import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";
const Title = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  return (
    <p className={`text-xl text-${theme}-300 text-center my-2`}>
      Welcome {user.username}!
    </p>
  );
};

export default Title;
