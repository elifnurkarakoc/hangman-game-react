import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const Header = () => {
  const { loggedIn,logout } = useAuth();
  //console.log(loggedIn);
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl">
        <Link to="/" exact className="mr-2">
          Hangman Game
        </Link>
      </div>
      <div className="text-lg ">
        {loggedIn && (
          <div>
            <Link to="/profile" className="mr-2">
              Profile
            </Link>
            <Link to="/score" className="mr-2">
              Score
            </Link>
            <Link to="/signin" onClick={logout} className="mr-2">
              Logout
            </Link>
          </div>
        )}
        {!loggedIn && (
          <div>
            <Link to="/signin" className="mr-2">
              Signin
            </Link>
            <Link to="/signup" className="mr-2">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
