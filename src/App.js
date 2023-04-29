import BurgerBlock from "./components/burger-block/BurgerBlock";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Sort from "./components/sort/Sort";
import "./scss/app.scss";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <BurgerBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
