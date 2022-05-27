import FilterMenu from "./components/FilterMenu";
import ModalMenu from "./components/ModalMenu";
import Header from "./components/Header";
import StickyCart from "./components/StickyCart";
import HeaderSticky from "./components/HeaderSticky";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import CheckAddress from "./components/CheckAddress";
import Advertising from "./components/Advertising";
import NavBar from "./components/NavBar";
import ModalMenuBurger from "./components/ModalMenuBurger";
import ContentAbout from "./components/ContentAbout";

function App() {

  return (
    <div>
      <FilterMenu />
      <ModalMenu />
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
