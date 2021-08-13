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
  selectAlert,
  selectAuthorization,
  selectSidebar,
  selectUser,
} from "./redux/store";
import { AnimatePresence } from "framer-motion";
import { clearAlert } from "./redux/slices/alert.slice";
import { getUserData } from "./redux/services/auth.service";

const App = () => {
  const [loading, setLoading] = useState(true);

  const sidebarActive = useSelector(selectSidebar);
  const isAuthorized = useSelector(selectAuthorization);
  const user = useSelector(selectUser);
  const alert = useSelector(selectAlert);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  // If the sidebar is active or the app is loading, remove the ability to scroll the page and conversely
  useEffect(() => {
    sidebarActive || loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  }, [sidebarActive, loading]);

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
        {!isAuthorized && <Route exact path="/" component={Home} />}
        <ProtectedRoute
          component={Dashboard}
          path="/dashboard"
          isAuthorized={isAuthorized}
        />
        <ProtectedRoute
          component={Register}
          path="/register"
          isAuthorized={isAuthorized}
        />
        <ProtectedRoute
          component={Login}
          path="/login"
          isAuthorized={isAuthorized}
        />
        <ProtectedRoute
          component={Wallet}
          path="/wallet"
          isAuthorized={isAuthorized}
        />
        <Route path="*" component={NotFound404} />
      </Switch>
    </div>
  );
};

export default App;
