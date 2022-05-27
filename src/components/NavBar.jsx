import React from 'react'

function NavBar() {
  return (
    <div className="nav-bar-wrapper">
            <a href="#">
              <img loading="lazy" src="./img/svg/Pizza.svg" alt="" />
            </a>
            <nav className="nav-bar" uk-slider="finite: true">
              <ul className="nav-bar__list uk-slider-items">
                <li>
                  <a href="#advertisinglink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Account.svg"
                      alt=""
                    />
                    <span>Акции</span>
                  </a>
                </li>
                <li>
                  <a href="#pizzalink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Pizza.svg"
                      alt=""
                    />
                    <span>Пицца</span>
                  </a>
                </li>
                <li>
                  <a href="#sushilink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Sushi.svg"
                      alt=""
                    />
                    <span>Суши</span>
                  </a>
                </li>
                <li>
                  <a href="#drinkslink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Drink.svg"
                      alt=""
                    />
                    <span>Напитки</span>
                  </a>
                </li>
                <li>
                  <a href="#snackslink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Snacks.svg"
                      alt=""
                    />
                    <span>Закуски</span>
                  </a>
                </li>
                <li>
                  <a href="#combolink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Combo.svg"
                      alt=""
                    />
                    <span>Комбо</span>
                  </a>
                </li>
                <li>
                  <a href="#desertslink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Dessert.svg"
                      alt=""
                    />
                    <span>Десерты</span>
                  </a>
                </li>
                <li>
                  <a href="#saucelink">
                    <img
                      loading="lazy"
                      src="./img/nav-bar-src/Sauce.svg"
                      alt=""
                    />
                    <span>Соусы</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
  )
}

export default NavBar