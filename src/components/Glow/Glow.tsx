import "./Glow.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebar } from "../../redux/store";
import { handleSidebar } from "../../redux/slices/sidebar";

const Glow = () => {
  const dispatch = useDispatch();
  const sidebarActive = useSelector(selectSidebar);

  return (
    <div
      className={sidebarActive ? "Glow Glow--active" : "Glow"}
      onClick={() => dispatch(handleSidebar())}
    ></div>
  );
};

export default Glow;
