import React from "react";
import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";

import Layout from "./page/LayoutPage";
import HomePage from "./page/HomePage";
import BasketPage from "./page/BasketPage";
import NotFound from "./page/NotFound";

export const Context = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <Context.Provider value={{ searchValue, setSearchValue }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
