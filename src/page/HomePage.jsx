import React from "react";

import BurgerBlock from "../components/burger-block/BurgerBlock";
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import Skeleton from "../components/burger-block/Skeleton";

const typeNames = ["classic", "dietary"];

function HomePage({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: "popular",
    sortProperty: "raiting",
  });
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    const url = new URL(`https://644d7bc1cfdddac970a58e8c.mockapi.io/items`);

    const showSortName = sortType.sortProperty.replace("-", "");
    const ascOrDesc = sortType.sortProperty.includes("-") ? "asc" : "desc";

    url.searchParams.append("sortBy", `${showSortName}`);
    url.searchParams.append("order", `${ascOrDesc}`);

    if (categoryId > 0) {
      url.searchParams.append("category", `${categoryId}`);
    }

    setIsLoading(true);

    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scroll(0, 0);
      })
      .catch((error) => console.log(error));
  }, [sortType, categoryId]);

  const onLoader = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const burgers = items
    .filter((burger) =>
      burger.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((burger) => (
      <BurgerBlock key={burger.id} {...burger} typeNames={typeNames} />
    ));

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            categoryId={categoryId}
            onChangeCategory={(id) => setCategoryId(id)}
          />
          <Sort sortType={sortType} onChangeSort={(obj) => setSortType(obj)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? onLoader : burgers}</div>
      </div>
    </div>
  );
}

export default HomePage;
