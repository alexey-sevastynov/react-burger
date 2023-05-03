import React from "react";
import spoil from "../../assets/img/food.png";

function ErrorApi() {
  return (
    <div className="cart cart--empty">
      <h2>Trouble happened !</h2>
      <p>
        The burgers spoiled, come back later.
        <br />
        We will solve this problem as soon as possible
      </p>
      <img src={spoil} alt="error" />
    </div>
  );
}

export default ErrorApi;
