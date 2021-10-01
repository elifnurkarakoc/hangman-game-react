import { useState, createContext, useEffect, useContext } from "react";

/*As soon as the user logs in, the data is kept in the local storage, 
when the user logs out, the data is deleted from the local storege.
When the page is refreshed, data is written to the local storage so that the user does not log in again. */

/*AuthContext is the context where user information is kept, 
local storage is updated,
and authentication operations such as login and logout are made.*/

const AuthContext = createContext();

let userObject = JSON.parse(localStorage.getItem("user"));

export const AuthProvider = ({ children }) => {
  let value =
    userObject === null
      ? null
      : {
          username: userObject.username,
          password: userObject.password,
          score: userObject.score,
          id: userObject.id,
        };
  const [user, setUser] = useState(value);
  const [loggedIn, setLoggedIn] = useState(user === null ? false : true);

  useEffect(() => {
    (async () => {
      try {
        const userObject = JSON.parse(localStorage.getItem("user"));
        if (userObject.username === null || userObject.password === null) {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
          login({
            username: userObject.username,
            password: userObject.password,
            score: userObject.score,
            id: userObject.id,
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  const login = (data) => {
    setLoggedIn(true);
    setUser(data);
    var userObject = {
      username: data.username,
      password: data.password,
      score: data.score,
      id: data.id,
    };
    localStorage.setItem("user", JSON.stringify(userObject));
  };

  const logout = (data) => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem("user");
  };
  const updateLocalStorageUser = (data) => {
    var userObject = {
      username: data.username,
      password: data.password,
      score: data.score,
      id: data.id,
    };
    localStorage.setItem("user", JSON.stringify(userObject));
  };

  const values = {
    loggedIn,
    user,
    login,
    logout,
    setUser,
    updateLocalStorageUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
