import React from "react";
import styles from "./pagination.module.scss";
import left from "../../assets/img/left-arrow.png";
import right from "../../assets/img/right-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { setPageNext, setPagePrev } from "../../redux/slices/filterSlice";
import { setPage } from "../../redux/slices/filterSlice";

const pages = ["1", "2", "3"];

function Pagination() {
  const dispatch = useDispatch();
  const page = useSelector(({ filterSlice }) => filterSlice.page);

  const leftPage = () => {
    if (page > 1) {
      dispatch(setPagePrev(page));
    }
  };
  const rightPage = () => {
    if (page < 3) {
      dispatch(setPageNext(page));
    }
  };

  const showNumberPages = pages.map((item, id) => {
    return (
      <div
        key={item}
        style={page === +item ? { backgroundColor: "#136f0d" } : null}
        onClick={() => dispatch(setPage(+item))}
        className={styles.circleMain}
      >
        <p>{item}</p>
      </div>
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.circle} onClick={leftPage}>
        <img src={left} alt="left" />
      </div>
      {showNumberPages}
      <div className={styles.circle} onClick={rightPage}>
        <img src={right} alt="right" />
      </div>
    </div>
  );
}

export default Pagination;
