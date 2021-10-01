import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
const Header = () => {
  const { loggedIn, logout } = useAuth();
  const { theme } = useTheme();
  return (
    <div
      className={`flex justify-between items-center py-3 text-${theme}-300 `}
    >
      <div className="flex text-2xl">
        <div className="mr-2">
          <ThemeSwitcher />
        </div>
        <Link to="/" exact className="mr-2 hover:text-purple-800 ">
          Hangman Game
        </Link>
      </div>

      <div className="text-lg ">
        {loggedIn && (
          <div>
            <Link to="/profile" className="mr-3 hover:text-purple-800">
              Profile
            </Link>
            <Link to="/score" className="mr-3 hover:text-purple-800  ">
              Score
            </Link>
            <Link
              to="/signin"
              onClick={logout}
              className="mr-3 hover:text-purple-800 "
            >
              Logout
            </Link>
          </div>
        )}
        {!loggedIn && (
          <div>
            <Link to="/signin" className="mr-3 hover:text-purple-800">
              Signin
            </Link>
            <Link to="/signup" className="mr-3 hover:text-purple-800">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
