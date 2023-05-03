import axios from "axios";
import React from "react";
import close from "../../assets/img/close.png";

import { Link, useParams } from "react-router-dom";

import styles from "./burgerDescription.module.scss";

function BurgerDescription() {
  const [burger, setBurger] = React.useState({});
  const { id } = useParams();

  const apiBurger = async () => {
    try {
      const responce = await axios.get(
        `https://644d7bc1cfdddac970a58e8c.mockapi.io/items/${id}`
      );
      setBurger(responce.data);
    } catch (error) {
      alert("error");
    }
  };

  React.useEffect(() => {
    apiBurger();
  }, []);

  if (!burger) {
    return "loading...";
  }

  return (
    <div className="container">
      <div className={styles.root}>
        <img src={burger.imageUrl} alt="burger" />
        <div className={styles.description}>
          <h2>{burger.title}</h2>
          <p>{burger.description}</p>
        </div>
        <Link to="/">
          <img className={styles.close} src={close} alt="close" />
        </Link>
      </div>
    </div>
  );
}

export default BurgerDescription;
