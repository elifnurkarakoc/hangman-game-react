import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const userObject = localStorage.getItem("user");
        if (userObject.username === null || userObject.password === null) {
          setLoggedIn(false);
        } else {
          login({
            username: userObject.username,
            password: userObject.password,
            score: userObject.score,
            id: userObject.id,
          });
          setLoggedIn(true);
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
  const updateLocalStorageUser =(data) => {
    setUser(data);
    var userObject = {
      username: data.username,
      password: data.password,
      score: data.score,
      id: data.id,
    };
    console.log("updateUSer",{data})
    localStorage.setItem("user", JSON.stringify(userObject));
  }
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
