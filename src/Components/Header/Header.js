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
      <Nav />
    </header>
  );
};

export default Header;
