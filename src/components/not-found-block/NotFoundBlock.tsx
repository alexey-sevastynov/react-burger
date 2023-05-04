import React from "react";

import styles from "./notFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>Not found</h1>
      <p className={styles.text}>
        Unfortunately this page is not available in our online store.
      </p>
    </div>
  );
}

export default NotFoundBlock;
