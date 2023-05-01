import React from "react";

const categories = ["All", "Meat", "Becon", "Fish", "Spicy", "Vegan"];

function Categories({ categoryId, onChangeCategory }) {
  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  const showCategories = categories.map((categoryName, id) => (
    <li
      key={categoryName}
      onClick={() => onChangeCategory(id)}
      className={categoryId === id ? "active" : ""}
    >
      {categoryName}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{showCategories}</ul>
    </div>
  );
}

export default Categories;
