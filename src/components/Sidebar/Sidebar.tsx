import "./Sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthorization, selectSidebar } from "../../redux/store";
import { RiDashboardLine, RiNewspaperLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { FiSettings, FiHome } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { closeSidebar } from "../../redux/slices/sidebar";
import { formatPathname } from "../../utils/location";
import { setAuthorization } from "../../redux/slices/authorization";
import me from "../../assets/img/me.jpeg";

const Sidebar = () => {
  const sidebarActive = useSelector(selectSidebar);
  const isAuthorized = useSelector(selectAuthorization);
  const location = useLocation();

  const dispatch = useDispatch();

  return (
    <div className={sidebarActive ? "Sidebar Sidebar--active" : "Sidebar"}>
      <div className="Sidebar__logo-wrapper"></div>
      <div className="Sidebar__navigation-wrapper">
        {isAuthorized && (
          <div className="Sidebar__profile">
            <div className="Sidebar__image-wrapper">
              <img src={me} alt="Profile" className="Sidebar__image" />
            </div>
            <div className="Sidebar__user-data">
              <div className="Sidebar__name">
                <span>John Walker</span>
              </div>
              <div className="Sidebar__email">
                <span>john211@protonmail.com</span>
              </div>
            </div>
          </div>
        )}
        <nav className="Sidebar__navigation">
          {isAuthorized ? (
            <ul className="Sidebar__nav-list">
              <li
                className={
                  formatPathname(location.pathname) === "Dashboard"
                    ? "Sidebar__nav-item Sidebar__nav-item--active"
                    : "Sidebar__nav-item"
                }
              >
                <Link
                  to="/dashboard"
                  className="Sidebar__nav-item-link"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <div className="Sidebar__nav-item-wrapper">
                    <div className="Sidebar__nav-item-logo-wrapper">
                      <RiDashboardLine className="Sidebar__nav-item-logo" />
                    </div>
                    <div className="Sidebar__nav-item-title">Dashboard</div>
                  </div>
                </Link>
              </li>
              <li
                className={
                  formatPathname(location.pathname) === "Wallet"
                    ? "Sidebar__nav-item Sidebar__nav-item--active"
                    : "Sidebar__nav-item"
                }
              >
                <Link
                  to="/wallet"
                  className="Sidebar__nav-item-link"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <div className="Sidebar__nav-item-wrapper">
                    <div className="Sidebar__nav-item-logo-wrapper">
                      <BiWallet className="Sidebar__nav-item-logo" />
                    </div>
                    <div className="Sidebar__nav-item-title">Wallet</div>
                  </div>
                </Link>
              </li>
              <li
                className={
                  formatPathname(location.pathname) === "News"
                    ? "Sidebar__nav-item Sidebar__nav-item--active"
                    : "Sidebar__nav-item"
                }
              >
                <Link
                  to="/news"
                  className="Sidebar__nav-item-link"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <div className="Sidebar__nav-item-wrapper">
                    <div className="Sidebar__nav-item-logo-wrapper">
                      <RiNewspaperLine className="Sidebar__nav-item-logo" />
                    </div>
                    <div className="Sidebar__nav-item-title">News</div>
                  </div>
                </Link>
              </li>
              <li
                className={
                  formatPathname(location.pathname) === "Settings"
                    ? "Sidebar__nav-item Sidebar__nav-item--active"
                    : "Sidebar__nav-item"
                }
              >
                <Link
                  to="/settings"
                  className="Sidebar__nav-item-link"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <div className="Sidebar__nav-item-wrapper">
                    <div className="Sidebar__nav-item-logo-wrapper">
                      <FiSettings className="Sidebar__nav-item-logo" />
                    </div>
                    <div className="Sidebar__nav-item-title">Settings</div>
                  </div>
                </Link>
              </li>
              <li className="Sidebar__nav-item">
                <a
                  href="/"
                  className="Sidebar__nav-item-link"
                  onClick={() => dispatch(setAuthorization(false))}
                >
                  <div className="Sidebar__nav-item-wrapper">
                    <div className="Sidebar__nav-item-logo-wrapper">
                      <RiLogoutCircleLine
                        className="Sidebar__nav-item-logo"
                        color="#ff0000"
                      />
                    </div>
                    <div className="Sidebar__nav-item-title">Logout</div>
                  </div>
                </a>
              </li>
            </ul>
          ) : (
            <ul className="Sidebar__nav-list">
              <li
                className={
                  formatPathname(location.pathname) === "Home"
                    ? "Sidebar__nav-item Sidebar__nav-item--active"
                    : "Sidebar__nav-item"
                }
              >
                <Link
                  to="/"
                  className="Sidebar__nav-item-link"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <div className="Sidebar__nav-item-wrapper">
                    <div className="Sidebar__nav-item-logo-wrapper">
                      <FiHome className="Sidebar__nav-item-logo" />
                    </div>
                    <div className="Sidebar__nav-item-title">Home</div>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </nav>
        <button
          onClick={() => dispatch(setAuthorization(true))}
          style={{ backgroundColor: "white" }}
        >
          Fake login
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
