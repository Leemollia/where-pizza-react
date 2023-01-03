import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__column">
              <div className="logo logo--footer">
                <img loading="lazy" src="./img/svg/Pizza.svg" alt="" />
                <span>Куда пицца</span>
              </div>
            </div>
            <div className="footer__column">
              <h4>Куда пицца</h4>
              <div className="footer__refs">
                <a href="">О компании</a>
                <a href="">Пользовательское соглашение</a>
                <a href="">Условия гарантии</a>
              </div>
            </div>
            <div className="footer__column">
              <h4>Помощь</h4>
              <div className="footer__refs">
                <a href="">Ресторан</a>
                <a href="">Контакты</a>
                <a href="">Поддержка</a>
                <a href="">Отследить заказ</a>
              </div>
            </div>
            <div className="footer__column">
              <h4>Контакты</h4>
              <div className="footer__refs">
                <ul>
                  <li>
                    <img loading="lazy" src="./img/svg/Phone.svg" alt="" />
                    <a href="tel:+7(926) 223-10-11">+7(926) 223-10-11</a>
                  </li>
                  <li>
                    <img loading="lazy" src="./img/svg/Location2.svg" alt="" />
                    <a href="">Москва, ул. Юных Ленинцев, д.99</a>
                  </li>
                  <li>
                    <img
                      loading="lazy"
                      style={{ display: "inline-block" }}
                      src="./img/svg/Facebook.svg"
                      alt=""
                    />
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                    <img loading="lazy" src="./img/svg/Instagram.svg" alt="" />
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <p>© Copyright 2021 — Куда Пицца</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer