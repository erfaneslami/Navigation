import { motion } from "framer-motion";
import Classes from "./Search.module.scss";

const searchVariant = {
  initial: {
    x: -35,
    transition: { type: "tween" },
  },
  show: {
    x: 0,
    transition: { type: "tween", ease: "easeOut" },
  },
};

const Search = (props) => {
  return (
    <motion.div
      variants={searchVariant}
      initial="initial"
      animate="show"
      className={Classes.searchContainer}
    >
      <div className={Classes.searchBar}>
        <div className={Classes.searchLogo}></div>
        <form>
          <input type="text" placeholder=" جستجوی محصولات ..." />
        </form>
      </div>
      <div className={Classes.searchClose} onClick={props.onClose}></div>
    </motion.div>
  );
};

export default Search;
