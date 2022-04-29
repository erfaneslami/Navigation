import { AnimatePresence } from "framer-motion";
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
    <div className={Classes["nav-container"]}>
      <AnimatePresence>
        {!isSearching ? (
          <Nav onSearch={showSearch} />
        ) : (
          <Search onClose={closeSearch} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
