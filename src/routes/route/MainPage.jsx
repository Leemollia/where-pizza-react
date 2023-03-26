import React from "react";
import MainContent from "../../layouts/mainContent";
import CheckAddress from "../../layouts/checkAddress";
import Advertising from "../../layouts/advertising";
import NavBar from "../../layouts/navBar";
import ModalMenuBurger from "../../layouts/modalMenuBurger";
import ContentAbout from "../../layouts/contentAbout";

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
