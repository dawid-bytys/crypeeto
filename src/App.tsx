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
} from "./utils/grabber";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthorization, selectSidebar } from "./redux/store";

const App = () => {
  const [loading, setLoading] = useState(true);

  const sidebarActive = useSelector(selectSidebar);
  const isAuthorized = useSelector(selectAuthorization);

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

  return (
    <div className="App">
      {loading && <Loading />}
      <Glow />
      <Header />
      <Sidebar />
      <Router>
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
      </Router>
    </div>
  );
};

export default App;
