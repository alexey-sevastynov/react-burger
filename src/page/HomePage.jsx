import React from "react";
import qs from "qs";

import { useNavigate } from "react-router-dom";

import BurgerBlock from "../components/burger-block/BurgerBlock";
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import Skeleton from "../components/burger-block/Skeleton";
import Pagination from "../components/pagination/Pagination";
import ErrorApi from "../components/errorApi/ErrorApi";
import Search from "../components/search/Search";

import { Context } from "../App";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import { fetchBurgers } from "../redux/slices/burgersSlice";

const typeNames = ["classic", "dietary"];

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryId, sortType, page, items, status } = useSelector(
    ({ filterSlice, burgersSlice }) => ({
      categoryId: filterSlice.categoryId,
      sortType: filterSlice.sort,
      page: filterSlice.page,
      items: burgersSlice.items,
      status: burgersSlice.status,
    })
  );

  const { searchValue } = React.useContext(Context);

  const apiBurgers = async () => {
    const showSortName = sortType.sortProperty.replace("-", "");
    const ascOrDesc = sortType.sortProperty.includes("-") ? "asc" : "desc";
    // setIsLoading(true);
    dispatch(
      fetchBurgers({
        showSortName,
        ascOrDesc,
        categoryId,
        page,
      })
    );

    window.scroll(0, 0);
  };

  React.useEffect(() => {
    apiBurgers();
  }, [sortType, categoryId, page]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType.sortProperty,
      categoryId,
      page,
    });

    navigate(`?${queryString}`);
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
        <Search />
        <div className="content__top">
          <Categories
            categoryId={categoryId}
            onChangeCategory={(id) => dispatch(setCategoryId(id))}
          />
          <Sort />
        </div>
        <h2 className="content__title">All burgers</h2>
        <div className="content__items">
          {status === "error" && <ErrorApi />}
          {status === "loading" ? onLoader : burgers}
        </div>
        <div className="content__pagination">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
