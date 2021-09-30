import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Route, Redirect } from "react-router";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuth();
  // console.log("protectedroute",loggedIn)
  // console.log("protectedroute",user)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          console.log("component name protected routing", Component, rest);
          return <Component />;
        }
        return <Redirect to={{ pathname: "/signin" }} />;
      }}
    ></Route>
  );
};

export default ProtectedRoute;
