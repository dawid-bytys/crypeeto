import "./Glow.scss";
import { useDispatch } from "react-redux";
import { handleSidebar } from "../../redux/slices/sidebar.slice";
import { motion } from "framer-motion";

const Glow = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="Glow"
      onClick={() => dispatch(handleSidebar())}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
};

export default Glow;
