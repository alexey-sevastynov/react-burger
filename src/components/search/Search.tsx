import React from "react";
import search from "../../assets/img/search.png";
import close from "../../assets/img/close.png";
import styles from "./search.module.scss";

import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

function Search() {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback((str: string): void => {
    dispatch(setSearchValue(str));
  }, []);

  const onChangeInput = (event: any) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.search} src={search} alt="search" />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.close}
          src={close}
          alt="close"
        />
      )}

      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChangeInput(event)}
        placeholder="search burger..."
      />
    </div>
  );
}

export default Search;
