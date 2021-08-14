import "./App.scss";
import { useState, useEffect } from "react";
import {
  Header,
  Sidebar,
  Loading,
  Glow,
  Home,
  NotFound404,
  ProtectedRoute,
  Dashboard,
  Wallet,
  Register,
  Login,
  Alert,
} from "./utils/grabber";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTheme,
  selectAlert,
  selectAuthorization,
  selectSidebar,
  selectUser,
} from "./redux/store";
import { AnimatePresence } from "framer-motion";
import { clearAlert } from "./redux/slices/alert.slice";
import { getUserData } from "./redux/services/auth.service";

export const App = () => {
  const [loading, setLoading] = useState(true);

  const sidebarActive = useSelector(selectSidebar);
  const authorization = useSelector(selectAuthorization);
  const user = useSelector(selectUser);
  const alert = useSelector(selectAlert);
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  // If the sidebar is active or the app is loading, remove the ability to scroll the page and conversely
  useEffect(() => {
    sidebarActive || loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  }, [sidebarActive, loading]);

  // Change the theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  // Clear the alert after 5 seconds
  useEffect(() => {
    // Without the condition below, the timeout could be executed even when the alert changes its value to null because it's being watched by the     useEffect
    if (alert) {
      const alertClearenceTimeout = setTimeout(() => {
        dispatch(clearAlert());
      }, 5000);

      return () => clearTimeout(alertClearenceTimeout);
    }
  }, [alert, dispatch]);

  // Check whether the user has active session and return their data
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) return setLoading(false);

    dispatch(getUserData(accessToken));
  }, [dispatch]);

  // Check user's data status
  useEffect(() => {
    if (user.status !== "pending") {
      setLoading(false);

      if (user.status === "success") {
        location.pathname === "/" && history.push("/dashboard");
      }
    }
    // we can safely ignore the error about "location.pathname", because we don't want it to re-render if location changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.status, history]);

  // If a login status is equal to "success", return user's data
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (authorization.login === "success" && accessToken) {
      dispatch(getUserData(accessToken));
    }
  }, [authorization.login, dispatch]);

  return (
    <div className="App">
      {loading && <Loading />}
      <AnimatePresence>{sidebarActive && <Glow />}</AnimatePresence>
      <AnimatePresence>
        {alert && <Alert message={alert.message} color={alert.color} />}
      </AnimatePresence>
      <Header />
      <Sidebar
        username={user.data.username}
        email={user.data.email}
        picture={user.data.picture}
      />
      <Switch>
        {!authorization.is_authorized && (
          <Route exact path="/" component={Home} />
        )}
        <ProtectedRoute
          component={Dashboard}
          path="/dashboard"
          isAuthorized={authorization.is_authorized}
        />
        <ProtectedRoute
          component={Register}
          path="/register"
          isAuthorized={authorization.is_authorized}
        />
        <ProtectedRoute
          component={Login}
          path="/login"
          isAuthorized={authorization.is_authorized}
        />
        <ProtectedRoute
          component={Wallet}
          path="/wallet"
          isAuthorized={authorization.is_authorized}
        />
        <Route path="*" component={NotFound404} />
      </Switch>
    </div>
  );
};
