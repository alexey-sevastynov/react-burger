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

import { useDispatch, useSelector } from "react-redux";
import { selectorFilter, setCategoryId } from "../redux/slices/filterSlice";
import { fetchBurgers, selectorBurgerData } from "../redux/slices/burgersSlice";

const typeNames = ["classic", "dietary"];

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, status } = useSelector(selectorBurgerData);
  const { categoryId, sort, page, searchValue } = useSelector(selectorFilter);

  const apiBurgers = async () => {
    const showSortName = sort.sortProperty.replace("-", "");
    const ascOrDesc = sort.sortProperty.includes("-") ? "asc" : "desc";
    // setIsLoading(true);
    dispatch(
      // @ts-ignore
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
  }, [sort, categoryId, page]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      page,
    });

    navigate(`?${queryString}`);
  }, [sort, categoryId, page]);

  const onLoader = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const burgers = items
    .filter((burger: any) =>
      burger.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((burger: any) => (
      <BurgerBlock key={burger.id} {...burger} typeNames={typeNames} />
    ));

  return (
    <div className="content">
      <div className="container">
        <Search />
        <div className="content__top">
          <Categories
            categoryId={categoryId}
            onChangeCategory={(id: number) => dispatch(setCategoryId(id))}
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
};

export default HomePage;
