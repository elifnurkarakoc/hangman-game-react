import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Route, Redirect } from "react-router";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component />;
        }
        return <Redirect to={{ pathname: "/signin" }} />;
      }}
    ></Route>
  );
};

export default ProtectedRoute;
