import { useState, createContext, useEffect, useContext } from "react";

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
  const [loggedIn, setLoggedIn] = useState(user === null ? false: true);

  useEffect(() => {
    (async () => {
      try {
        const userObject = JSON.parse(localStorage.getItem("user"));
        // console.log("userObject", { userObject });
        if (userObject.username === null || userObject.password === null) {
          // console.log("userObject is null", { userObject });
          setLoggedIn(false);
        } else {
          // console.log("else userObject login", { userObject });
          setLoggedIn(true);
          login({
            username: userObject.username,
            password: userObject.password,
            score: userObject.score,
            id: userObject.id,
            // loggedIn: true,
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  const login = (data) => {
    // console.log("login", { data });
    setLoggedIn(true);
    setUser(data);
    var userObject = {
      username: data.username,
      password: data.password,
      score: data.score,
      id: data.id,
      // loggedIn: true,
    };
    localStorage.setItem("user", JSON.stringify(userObject));
  };

  const logout = (data) => {
    // console.log("logout", { data });
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem("user");
  };
  const updateLocalStorageUser = (data) => {
    setUser(data);
    var userObject = {
      username: data.username,
      password: data.password,
      score: data.score,
      id: data.id,
      // loggedIn: true,
    };
    console.log("updateLocalStorageUser", { data });
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
