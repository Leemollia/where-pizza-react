import React from 'react'

function HeaderSticky() {
  window.onscroll = function showHeaderSticky() {
    const headerStickyLinks = document.querySelector(".sticky__links");
    if (window.innerWidth > 960) {
      if (document.documentElement.scrollTop > 180) {
        headerStickyLinks.style.display = "flex";
      } else {
        headerStickyLinks.style.display = "none";
      }
    }
  }
  return (
    <div className="header-sticky">
          <div className="container">
            <ul className="header-sticky__nav-bar">
              <a href="#" className="logo">
                <img
                  loading="lazy"
                  src={require("../img/svg/Pizza.svg").default}
                  alt=""
                />
                <span>Куда пицца</span>
              </a>
              <div className="sticky__links">
                <a href="#advertisinglink">Акции</a>
                <a href="#pizzalink">Пицца</a>
                <a href="#sushilink">Суши</a>
                <a href="#drinkslink">Напитки</a>
                <a href="#snackslink">Закуски</a>
                <a href="#combolink">Комбо</a>
                <a href="#desertslink">Десерты</a>
                <a href="#saucelink">Соусы</a>
                <a href="#">
                  Другое
                  <img
                    loading="lazy"
                    id="arrowdownsvg"
                    src="./img/svg/Arrowdown.svg"
                    alt=""
                  />
                </a>
                <div className="popup-other" >
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
              <nav
                className=""
                style={{ backgroundColor: "#fff" }}
              >
                <div className="">
                  <a
                    className=""
                    href="#"
                    style={{ minHeight: "30px" }}
                  >
                    <img loading="lazy" src="./img/svg/Menu.svg" alt="" />
                  </a>
                </div>
              </nav>
            </ul>
          </div>
        </div>
  )
}

export default HeaderSticky