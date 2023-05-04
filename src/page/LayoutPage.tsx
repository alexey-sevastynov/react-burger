import React from "react";
import Header from "../components/header/Header";

import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
