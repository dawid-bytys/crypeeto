import "./Sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthorization, selectSidebar } from "../../redux/store";
import { RiDashboardLine, RiNewspaperLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { FiSettings, FiHome } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { closeSidebar } from "../../redux/slices/sidebar.slice";
import { formatPathname } from "../../utils/location";
import me from "../../assets/img/me.jpeg";
import React from "react";

interface SidebarProps {
  username: string | null;
  email: string | null;
  picture: string | null;
}

export const Sidebar = ({ username, email, picture }: SidebarProps) => {
  const sidebarActive = useSelector(selectSidebar);
  const { is_authorized } = useSelector(selectAuthorization);
  const location = useLocation();

  const dispatch = useDispatch();

  // Logout a user
  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    localStorage.removeItem("access_token");
    window.location.reload();
  };

  return (
    <div className={sidebarActive ? "Sidebar Sidebar--active" : "Sidebar"}>
      <div className="Sidebar__logo-wrapper"></div>
      <div className="Sidebar__navigation-wrapper">
        {is_authorized && (
          <div className="Sidebar__profile">
            <div className="Sidebar__image-wrapper">
              <img src={me} alt="Profile" className="Sidebar__image" />
            </div>
            <div className="Sidebar__user-data">
              <div className="Sidebar__name">
                <span>{username}</span>
              </div>
              <div className="Sidebar__email">
                <span>{email}</span>
              </div>
            </div>
          </div>
        )}
        <nav className="Sidebar__navigation">
          {is_authorized ? (
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
                  onClick={handleLogout}
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
      </div>
    </div>
  );
};
