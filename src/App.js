import React from "react";
import "./scss/app.scss";

import BurgerBlock from "./components/burger-block/BurgerBlock";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Sort from "./components/sort/Sort";

import burgers from "./assets/db.json";

const typeNames = ["classic", "dietary"];

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://644d7bc1cfdddac970a58e8c.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((burger) => (
              <BurgerBlock key={burger.id} {...burger} typeNames={typeNames} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
