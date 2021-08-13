import { Redirect, Route, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
  isAuthorized: boolean;
}

export const ProtectedRoute = ({
  isAuthorized,
  ...routeProps
}: ProtectedRouteProps) => {
  if (isAuthorized) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "/" }} />;
  }
};
