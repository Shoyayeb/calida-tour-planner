import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "./../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="
        animate-spin
        rounded-full
        h-32
        w-32
        border-t-2 border-b-2 border-purple-500
      "
        ></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
