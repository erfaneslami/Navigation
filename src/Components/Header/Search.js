import { motion } from "framer-motion";
import Classes from "./Search.module.scss";

const Search = (props) => {
  return (
    <>
      <motion.div
        animate={{ opacity: 0.8 }}
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
    </>
  );
};

export default Search;
