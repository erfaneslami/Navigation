import { useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Search from "./Search";
import Classes from "./Nav.module.scss";

const Nav = (props) => {
  const desktopView = useMediaQuery("(min-width:52.5em)");
  const [isSearching, setIsSearching] = useState(false);

  const showSearch = () => {
    setIsSearching(true);
  };

  const closeSearch = () => {
    setIsSearching(false);
  };

  return (
    <nav>
      {desktopView && (
        <AnimatePresence exitBeforeEnter>
          {!isSearching && <DesktopNav onSearch={showSearch} key={1} />}
          {isSearching && <Search onClose={closeSearch} key={2} />}
        </AnimatePresence>
      )}
      {!desktopView && <MobileNav />}
    </nav>
  );
};

export default Nav;
