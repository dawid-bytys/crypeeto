import "./Sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebar } from "../../redux/store";
import { RiDashboardLine, RiNewspaperLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { closeSidebar } from "../../redux/slices/sidebar";
import { formatPathname } from "../../utils/location";

const Sidebar = () => {
  const sidebarActive = useSelector(selectSidebar);
  const location = useLocation();

  const dispatch = useDispatch();

  return (
    <div className={sidebarActive ? "Sidebar Sidebar--active" : "Sidebar"}>
      <div className="Sidebar__logo-wrapper"></div>
      <div className="Sidebar__navigation-wrapper">
        <nav className="Sidebar__navigation">
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
