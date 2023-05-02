import React from "react";
import search from "../../assets/img/search.png";
import close from "../../assets/img/close.png";
import styles from "./search.module.scss";

import { Context } from "../../App";

function Search() {
  const { searchValue, setSearchValue } = React.useContext(Context);

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.search} src={search} alt="search" />
      {searchValue && (
        <img
          onClick={onClickClear}
          className={styles.close}
          src={close}
          alt="close"
        />
      )}

      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="search burger..."
      />
    </div>
  );
}

export default Search;
