import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Classes from "./Header.module.scss";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

  const showSearch = () => {
    setIsSearching(true);
  };

  const closeSearch = () => {
    setIsSearching(false);
  };

  return (
    <header className={Classes["nav-container"]}>
      <AnimatePresence exitBeforeEnter>
        {!isSearching && <Nav onSearch={showSearch} key={4} />}
        {isSearching && <Search onClose={closeSearch} key={5} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
