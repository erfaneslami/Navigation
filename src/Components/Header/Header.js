import { useState } from "react";
import Classes from "./Header.module.scss";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

  const hanlder = () => {
    setIsSearching(true);
  };

  return (
    <>
      <div className={Classes["nav-container"]}>
        {!isSearching && <Nav />}
        <Search />
        <button onClick={hanlder}>click</button>
      </div>
    </>
  );
};

export default Header;
