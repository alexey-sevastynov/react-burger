import React from "react";
import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";

import Layout from "./page/LayoutPage";
import HomePage from "./page/HomePage";
import BasketPage from "./page/BasketPage";
import NotFound from "./page/NotFound";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout searchValue={searchValue} setSearchValue={setSearchValue} />
          }
        >
          <Route index element={<HomePage searchValue={searchValue} />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
