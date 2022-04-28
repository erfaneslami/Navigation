import Classes from "./Header.module.scss";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className={Classes["nav-container"]}>
        {/* <Nav /> */}
        <Search />
      </div>
    </>
  );
};

export default Header;
