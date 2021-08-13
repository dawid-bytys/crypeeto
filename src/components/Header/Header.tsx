import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebar } from "../../redux/store";
import { handleSidebar } from "../../redux/slices/sidebar.slice";
import { IoMdNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { formatPathname } from "../../utils/location";

export const Header = () => {
  const sidebarActive = useSelector(selectSidebar);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <header className="Header">
      <button
        className={
          sidebarActive
            ? "Header__hamburger-btn Header__hamburger-btn--active"
            : "Header__hamburger-btn"
        }
        aria-label="Open the menu"
        onClick={() => dispatch(handleSidebar())}
      >
        <div className="Header__hamburger-inner">
          <span className="Header__hamburger-line"></span>
          <span className="Header__hamburger-line"></span>
          <span className="Header__hamburger-line"></span>
        </div>
      </button>
      <div className="Header__heading-wrapper">
        <h1 className="Header__heading-primary">
          {formatPathname(location.pathname)}
        </h1>
      </div>
      <button
        className="Header__notifications-btn Header__notifications-btn--active"
        aria-label="Open notifications"
      >
        <div className="Header__notifications-inner">
          <IoMdNotifications className="Header__notifications-bell" />
          <span className="Header__notifications-badge">1</span>
        </div>
      </button>
    </header>
  );
};
