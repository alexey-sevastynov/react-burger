import React from "react";
import Header from "../components/header/Header";

import { Outlet } from "react-router-dom";

function Layout({ searchValue, setSearchValue }) {
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Outlet />
    </div>
  );
}

export default Layout;
