import React from 'react'

function Header() {
  return (
    <header>
    <div className="container">
      <div className="header-info">
        <div className="header-info__leftpanel">
          <ul>
            <li>
              <img
                loading="lazy"
                id="locationsvg"
                src="./img/svg/Location2.svg"
                alt=""
              />
              <span>Москва</span>
              <img
                loading="lazy"
                id="arrowdownsvg"
                src="./img/svg/Arrowdown.svg"
                alt=""
              />
            </li>
            <li>
              <a href="#check-address">Проверить адрес</a>
            </li>
            <li>
              Среднее время доставки*: <strong>00:24:19</strong>
            </li>
          </ul>
        </div>
        <div className="header-info__rightpanel">
          <ul>
            <li>Время работы c 11:00 до 23:00</li>
            <li>
              <img
                loading="lazy"
                id="accountsvg"
                src="./img/svg/Account.svg"
                alt=""
              />
              <span>Войти в аккаунт</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header