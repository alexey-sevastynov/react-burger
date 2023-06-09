import React from "react";
import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";

import Layout from "./page/LayoutPage";
import HomePage from "./page/HomePage";
import BasketPage from "./page/BasketPage";
import NotFound from "./page/NotFound";
import BurgerDescription from "./components/burger-description/BurgerDescription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/burger/:id" element={<BurgerDescription />} />
        <Route path="basket" element={<BasketPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
