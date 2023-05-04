import React from "react";
import iconEmtyBasket from "../../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

function BasketEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>Basket empty !</h2>
      <p>
        You probably haven't ordered pizza yet.
        <br />
        To order pizza, go to the main page.
      </p>
      <img src={iconEmtyBasket} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Come back</span>
      </Link>
    </div>
  );
}

export default BasketEmpty;
