import React from "react";
import MainContent from "../components/mainContent/mainContent";
import CheckAddress from "../components/checkAddress/checkAddress";
import Advertising from "../components/advertising/advertising";
import NavBar from "../components/navBar/navBar";
import ModalMenuBurger from "../components/modalMenuBurger/modalMenuBurger";
import ContentAbout from "../components/contentAbout/contentAbout";

function MainPage() {
  
  return (
    <>
        <ModalMenuBurger />
        <NavBar />
        <Advertising />
        <CheckAddress />
        <MainContent />
        <ContentAbout />
    </>
  );
}


export default MainPage;
