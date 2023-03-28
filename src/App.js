import React, { Children } from "react";

import FilterMenu from "./layouts/filterMenu";
import Header from "./layouts/header";
import StickyCart from "./layouts/stickyCart";
import HeaderSticky from "./layouts/headerSticky";
import Footer from "./layouts/footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <FilterMenu />
      <Header />
      <main>
        <HeaderSticky />
        <div className="container">
          <Outlet />
        </div>
      </main>
      <StickyCart />
      <Footer />
    </>
  );
}


export default App;
