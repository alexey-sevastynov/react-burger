import React from "react";
import styles from "./pagination.module.scss";
import left from "../../assets/img/left-arrow.png";
import right from "../../assets/img/right-arrow.png";

const pages = ["1", "2", "3"];

function Pagination({ setPage, page }) {
  const leftPage = () => {
    if (page > 1) {
      setPage((value) => value - 1);
    }
  };
  const rightPage = () => {
    if (page < 3) {
      setPage((value) => value + 1);
    }
  };

  const showNumberPages = pages.map((item, id) => {
    return (
      <div
        key={item}
        style={page === +item ? { backgroundColor: "#136f0d" } : null}
        onClick={() => setPage(+item)}
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
