import React from "react";

const categories = ["All", "Meat", "Becon", "Fish", "Spicy", "Vegan"];

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const showCategories = categories.map((category, id) => (
    <li
      key={category}
      onClick={() => onClickCategory(id)}
      className={activeIndex === id ? "active" : ""}
    >
      {category}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{showCategories}</ul>
    </div>
  );
}

export default Categories;
