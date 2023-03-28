import { useLayoutEffect, useRef, useState, useEffect } from "react";

function HeaderSticky() {
  const useResize = (refNav) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(24);

    const handleResize = () => {
      setWidth(refNav.current.offsetWidth);
      setHeight(refNav.current.offsetHeight);
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [refNav]);

    return { width, height };
  };

  const refNav = useRef();
  const popupRef = useRef();

  const { height } = useResize(refNav);

  if (height > 24) {
    const lastElem =
      refNav.current.children[refNav.current.children.length - 3];
    const another = refNav.current.children[refNav.current.children.length - 1];
    popupRef.current.appendChild(lastElem);
  }

  const [openPopup, setOpenPopup] = useState(false);

  const handlerOpenPopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <div className="header-sticky">
      <div className="container">
        <ul className="header-sticky__nav-bar">
          <a href="#" className="logo">
            <img loading="lazy" src="../img/svg/Pizza.svg" alt="" />
            <span>Куда пицца</span>
          </a>
          <div ref={refNav} className="sticky__links">
            <a href="#advertisinglink">Акции</a>
            <a href="#pizzalink">Пицца</a>
            <a href="#sushilink">Суши</a>
            <a href="#drinkslink">Напитки</a>
            <a href="#snackslink">Закуски</a>
            <a href="#combolink">Комбо</a>
            <a href="#desertslink">Десерты</a>
            <a href="#saucelink">Соусы</a>
            <button onClick={handlerOpenPopup}>
              Другое
              <img
                loading="lazy"
                id="arrowdownsvg"
                src="./img/svg/Arrowdown.svg"
                alt=""
              />
            </button>
            <div ref={popupRef} className="popup-other">
              <ul className="">
                <li>
                  <a href="#">Акции</a>
                </li>
                <li>
                  <a href="#">О компании</a>
                </li>
                <li>
                  <a href="#">Пользовательское соглашение</a>
                </li>
                <li>
                  <a href="#">Условия гарантии</a>
                </li>
                <li>
                  <a href="#">Ресторан</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Поддержка</a>
                </li>
                <li>
                  <a href="#">Отследить заказ</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sticky__cart">
            <button className="button button-cart">
              <img loading="lazy" src="./img/svg/Shoppingbag.svg" alt="" />
              <span>0 ₽</span>
            </button>
          </div>
          <nav className="" style={{ backgroundColor: "#fff" }}>
            <div className="">
              <a className="" href="#" style={{ minHeight: "30px" }}>
                <img loading="lazy" src="./img/svg/Menu.svg" alt="Header" />
              </a>
            </div>
          </nav>
        </ul>
      </div>
    </div>
  );
}

export default HeaderSticky;
