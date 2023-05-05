export const getBasketFromLocalStorage = () => {
  const data = localStorage.getItem("basket");
  return data ? JSON.parse(data) : [];
};
