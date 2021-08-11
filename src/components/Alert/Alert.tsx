import "./Alert.scss";
import { motion } from "framer-motion";

interface AlertProps {
  message: string;
  color: string;
}

const Alert = ({ message, color }: AlertProps) => {
  return (
    <motion.div
      className="Alert"
      style={{ backgroundColor: color }}
      initial={{ top: -150 }}
      animate={{ top: 0 }}
      exit={{ top: -150 }}
      transition={{ duration: 0.3 }}
    >
      {message}
    </motion.div>
  );
};

export default Alert;
