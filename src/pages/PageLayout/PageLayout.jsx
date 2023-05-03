import FilterMenu from "../components/filterMenu/filterMenu";
import Header from "../components/header/header";
import StickyCart from "../components/stickyCart/stickyCart";
import HeaderSticky from "../components/headerSticky/headerSticky";
import Footer from "../components/footer/footer";

import { Outlet } from "react-router-dom";

function PageLayout () {
  return (
    <>
      <FilterMenu />
      <Header />
      <main>
        {/* <HeaderSticky /> */}
        <div className="container">
          <Outlet />
        </div>
      </main>
      <StickyCart />
      <Footer />
    </>
  );
}

export default PageLayout;