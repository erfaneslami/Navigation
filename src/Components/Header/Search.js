import Classes from "./Search.module.scss";

const Search = () => {
  return (
    <>
      <div className={Classes.searchContainer}>
        <div className={Classes.searchBar}>
          <div className={Classes.searchLogo}></div>
          <form>
            <input type="text" placeholder=" جستجوی محصولات ..." />
          </form>
        </div>
        <div className={Classes.searchClose}></div>
      </div>
    </>
  );
};

export default Search;
