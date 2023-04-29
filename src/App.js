import BurgerBlock from "./components/burger-block/BurgerBlock";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Sort from "./components/sort/Sort";
import "./scss/app.scss";

function App() {
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
            <BurgerBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
