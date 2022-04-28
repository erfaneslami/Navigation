import Classes from "./Nav.module.scss";

const Search = () => {
  return (
    <>
      <div className={Classes.searchContainer}>
        <div className={Classes.searchLogo}></div>
        <div className={Classes.searchBar}>
          <form>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className={Classes.searchClose}></div>
      </div>
    </>
  );
};

export default Search;
