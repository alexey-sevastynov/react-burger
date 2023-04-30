import React from "react";
import BasketEmpty from "../components/basket/BasketEmpty";
import BasketItem from "../components/basket/BasketItem";

function BasketPage() {
  return (
    <div className="content">
      <div className="container container--cart">
        {/* <BasketItem /> */}
        <BasketEmpty />
      </div>
    </div>
  );
}

export default BasketPage;
