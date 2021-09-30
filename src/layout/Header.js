import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
const Header = () => {
  const { loggedIn,logout } = useAuth();
  //console.log(loggedIn);
  return (
    <div className="flex justify-between items-center text-gray-700">
      <div className="text-2xl">
        <Link to="/" exact className="mr-2">
          Hangman Game
        </Link>
      </div>
      <div className="text-lg ">
        {loggedIn && (
          <div>
            <Link to="/profile" className="mr-3">
              Profile
            </Link>
            <Link to="/score" className="mr-3">
              Score
            </Link>
            <Link to="/signin" onClick={logout} className="mr-3">
              Logout
            </Link>
          </div>
        )}
        {!loggedIn && (
          <div>
            <Link to="/signin" className="mr-3">
              Signin
            </Link>
            <Link to="/signup" className="mr-3">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
