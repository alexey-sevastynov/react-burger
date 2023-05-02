import React from "react";
import axios from "axios";

import BurgerBlock from "../components/burger-block/BurgerBlock";
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import Skeleton from "../components/burger-block/Skeleton";
import Pagination from "../components/pagination/Pagination";

import { Context } from "../App";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const typeNames = ["classic", "dietary"];

function HomePage() {
  const { categoryId, sortType, page } = useSelector(({ filterSlice }) => ({
    categoryId: filterSlice.categoryId,
    sortType: filterSlice.sort,
    page: filterSlice.page,
  }));

  const dispatch = useDispatch();

  const { searchValue } = React.useContext(Context);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const url = new URL(`https://644d7bc1cfdddac970a58e8c.mockapi.io/items`);

    const showSortName = sortType.sortProperty.replace("-", "");
    const ascOrDesc = sortType.sortProperty.includes("-") ? "asc" : "desc";

    url.searchParams.append("sortBy", `${showSortName}`);
    url.searchParams.append("order", `${ascOrDesc}`);

    if (categoryId > 0) {
      url.searchParams.append("category", `${categoryId}`);
    }

    //tagination
    url.searchParams.append("completed", false);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", 4);

    setIsLoading(true);

    //____________AXIOS
    axios
      .get(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
      .then((resposne) => {
        setItems(resposne.data);
        setIsLoading(false);
        window.scroll(0, 0);
      });

    //____________FETCH
    // fetch(url, {
    //   method: "GET",
    //   headers: { "content-type": "application/json" },
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //     window.scroll(0, 0);
    //   })
    //   .catch((error) => console.log(error));
  }, [sortType, categoryId, page]);

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
            onChangeCategory={(id) => dispatch(setCategoryId(id))}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? onLoader : burgers}</div>
        <div className="content__pagination">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
