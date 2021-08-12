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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAlert, selectAuthorization, selectSidebar } from "./redux/store";
import { AnimatePresence } from "framer-motion";
import { clearAlert } from "./redux/slices/alert";

const App = () => {
  const [loading, setLoading] = useState(true);

  const sidebarActive = useSelector(selectSidebar);
  const isAuthorized = useSelector(selectAuthorization);
  const alert = useSelector(selectAlert);

  const dispatch = useDispatch();

  // Simulate data loading
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

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
  }, [alert]);

  return (
    <Router>
      <div className="App">
        {loading && <Loading />}
        <AnimatePresence>{sidebarActive && <Glow />}</AnimatePresence>
        <AnimatePresence>
          {alert && <Alert message={alert.message} color={alert.color} />}
        </AnimatePresence>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
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
    </Router>
  );
};

export default App;
