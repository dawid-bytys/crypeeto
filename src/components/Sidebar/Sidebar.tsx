import "./Sidebar.scss";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../redux/store";

const Sidebar = () => {
  const sidebarActive = useSelector(selectSidebar);

  return (
    <div
      className={sidebarActive ? "Sidebar Sidebar--active" : "Sidebar"}
    ></div>
  );
};

export default Sidebar;
