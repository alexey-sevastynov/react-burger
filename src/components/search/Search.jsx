import React from "react";
import search from "../../assets/img/search.png";
import close from "../../assets/img/close.png";
import styles from "./search.module.scss";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <img className={styles.search} src={search} alt="search" />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.close}
          src={close}
          alt="close"
        />
      )}

      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="search burger..."
      />
    </div>
  );
}

export default Search;
