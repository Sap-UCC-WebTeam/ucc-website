import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./authUtils";

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default AuthRoute;