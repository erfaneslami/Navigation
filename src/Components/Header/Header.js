import Classes from "./Header.module.scss";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={Classes["nav-container"]}>
      <Nav />
    </header>
  );
};

export default Header;
