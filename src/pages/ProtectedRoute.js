import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Route, Redirect } from "react-router";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn,user } = useAuth();
  console.log("protectedroute",loggedIn)
  console.log("protectedroute",user)
  return (
    <Route
      {...rest}
      render={(props) => {
        
        if (loggedIn) {
          return <Component />;
        }
        return <Redirect to={{pathname:"/signup"}} />
      }}
    ></Route>
  );
};

export default ProtectedRoute;
