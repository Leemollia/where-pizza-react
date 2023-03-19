import React from "react";
import FilterMenu from "./layouts/filterMenu";
import ModalMenu from "./layouts/modalMenu";
import Header from "./layouts/header";
import StickyCart from "./layouts/stickyCart";
import HeaderSticky from "./layouts/headerSticky";
import Footer from "./layouts/footer";
import MainContent from "./layouts/mainContent";
import CheckAddress from "./layouts/checkAddress";
import Advertising from "./layouts/advertising";
import NavBar from "./layouts/navBar";
import ModalMenuBurger from "./layouts/modalMenuBurger";
import ContentAbout from "./layouts/contentAbout";

function App() {
  
  return (
    <>
      <FilterMenu />
      <Header />
      <main>
        <StickyCart />
        {/* <HeaderSticky /> */}
        <div className="container">
          <ModalMenuBurger />
          <NavBar />
          <Advertising />
          <CheckAddress />
          <MainContent />
          <ContentAbout />
          <ModalMenu/>
        </div>
      </main>
      <Footer />
    </>
  );
}


export default App;
