import axios from "axios";
import React from "react";
// import close from "../../assets/img/close.png";

import { Link, useNavigate, useParams } from "react-router-dom";

// import styles from "./burgerDescription.module.scss";

const BurgerDescription: React.FC = () => {
  const [burger, setBurger] = React.useState<{
    imageUrl: string;
    title: string;
    description: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  const apiBurger = async () => {
    try {
      const responce = await axios.get(
        `https://644d7bc1cfdddac970a58e8c.mockapi.io/items/${id}`
      );
      setBurger(responce.data);
    } catch (error) {
      alert("such the burger unexist!");
      navigate("/");
    }
  };

  React.useEffect(() => {
    apiBurger();
  }, []);

  if (!burger) {
    return <>"loading..."</>;
  }

  return (
    <div className="container">
      <div>
        <img src={burger.imageUrl} alt="burger" />
        <div>
          <h2>{burger.title}</h2>
          <p>{burger.description}</p>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="container">
  //     <div className={styles.root}>
  //       <img src={burger.imageUrl} alt="burger" />
  //       <div className={styles.description}>
  //         <h2>{burger.title}</h2>
  //         <p>{burger.description}</p>
  //       </div>
  //       <Link to="/">
  //         <img className={styles.close} src={close} alt="close" />
  //       </Link>
  //     </div>
  //   </div>
  // );
};

export default BurgerDescription;
