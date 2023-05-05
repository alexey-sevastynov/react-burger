import React from "react";

const categories = ["All", "Meat", "Becon", "Fish", "Spicy", "Vegan"];

type CategoriesProps = {
  categoryId: number;
  onChangeCategory: (id: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ categoryId, onChangeCategory }) => {
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
);

export default Categories;
