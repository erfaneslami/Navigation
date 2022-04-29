import { motion } from "framer-motion";
import Classes from "./Overlay.module.scss";
const Overlay = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={Classes.overlay}
      onClick={props.onClick}
    >
      {props.children}
    </motion.div>
  );
};

export default Overlay;
