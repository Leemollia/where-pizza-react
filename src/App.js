import React from "react";
import FilterMenu from "./components/FilterMenu";
import ModalMenu from "./components/ModalMenu";
import Header from "./components/Header";
import StickyCart from "./components/StickyCart";
import HeaderSticky from "./components/HeaderSticky";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent/MainContent";
import CheckAddress from "./components/CheckAddress";
import Advertising from "./components/Advertising";
import NavBar from "./components/NavBar";
import ModalMenuBurger from "./components/ModalMenuBurger";
import ContentAbout from "./components/ContentAbout";

function App() {
  document.addEventListener("DOMContentLoaded", () => {
    const allButtonFilter = document.querySelectorAll(".button-filter");
    const allButtonSelect = document.querySelectorAll(".button-select");
  
    allButtonFilter.forEach((button) => {
      button.setAttribute("uk-toggle", "target: #filter-menu");
  
      button.addEventListener("click", () => {
        button.setAttribute("uk-toggle", "target: #filter-menu");
      });
    });
  
    allButtonSelect.forEach((button) => {
      button.setAttribute("uk-toggle", "target: #modal-menu");
  
      button.addEventListener("click", () => {
        button.setAttribute("uk-toggle", "target: #modal-menu");
      });
    });
  });

  return (
    <div>
      <FilterMenu />
      <Header />
      <main>
        <StickyCart />
        <HeaderSticky />
        <div className="container">
          <ModalMenuBurger />
          <NavBar />
          <Advertising />
          <CheckAddress />
          <MainContent />
          <ContentAbout />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
