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
        //TODO: Kontrol eklicem --> Signup ve signin sayfaları loggedIn==true ise açma mevcut dayfada kal.
        if (loggedIn) {
          console.log("component name protected routing", Component);
          return <Component />;
        }

        return <Redirect to={{ pathname: "/signup" }} />;
      }}
    ></Route>
  );
};

export default ProtectedRoute;
