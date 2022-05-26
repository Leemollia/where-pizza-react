import "./App.css";

function App() {
  return (
    <div>
      <div id="filter-menu" uk-offcanvas="overlay:true; flip:true">
        <div className="uk-offcanvas-bar offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close
          ></button>
          <div className="offcanvas-bar__menu">
            <h2>Фильтры</h2>
            <p>Общее</p>
            <ul className="offcanvas-bar__items">
              <button className="button button-border">Хит</button>
              <button className="button button-border">Новинка</button>
              <button className="button button-border">С мясом</button>
              <button className="button button-border">Вегетарианская</button>
              <button className="button button-border">С курицей</button>
              <button className="button button-border">Без лука</button>
              <button className="button button-border">С грибами</button>
              <button className="button button-border">С морепродуктами</button>
              <button className="button button-border">Барбекю</button>
            </ul>
            <p>Сыр</p>
            <ul className="offcanvas-bar__items">
              <button className="button button-border">Реджанито</button>
              <button className="button button-border">Моцарелла</button>
              <button className="button button-border">Чеддер</button>
              <button className="button button-border">
                С голубой плесенью
              </button>
              <button className="button button-border">
                Смесь итальянских сыров
              </button>
              <button className="button button-border">Без лука</button>
              <button className="button button-border">
                Мягкий молодой сыр
              </button>
            </ul>
            <p>Мясо</p>
            <ul className="offcanvas-bar__items">
              <button className="button button-border">Пепперони</button>
              <button className="button button-border">Свинина</button>
              <button className="button button-border">Ветчина</button>
              <button className="button button-border">Бекон</button>
              <button className="button button-border">Чоризо</button>
              <button className="button button-border">Колбаски</button>
              <button className="button button-border">Куриная грудка</button>
            </ul>
            <p>Компонент</p>
            <ul className="offcanvas-bar__items">
              <button className="button button-border">Креветка</button>
              <button className="button button-border">Ананасы</button>
              <button className="button button-border">Шампиньоны</button>
              <button className="button button-border">Лук</button>
              <button className="button button-border">Перец халапеньо</button>
              <button className="button button-border">Орегано</button>
              <button className="button button-border">Зеленый перец</button>
              <button className="button button-border">Томаты</button>
              <button className="button button-border">Чеснок</button>
              <button className="button button-border">Красный перец</button>
              <button className="button button-border">Оливки</button>
              <button className="button button-border">Маслины</button>
              <button className="button button-border">Клубника</button>
              <button className="button button-border">
                Смесь итальянских трав
              </button>
            </ul>
          </div>
          <div className="offcanvas-bar__footer">
            <button className="button button-border">Сбросить</button>
            <button className="button button-border-focus">Применить</button>
          </div>
        </div>
      </div>
      <div id="modal-menu" className="uk-flex-top" uk-modal>
        <div className="modal-menu uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <div className="modal__line"></div>
          <button
            className="uk-modal-close-default"
            type="button"
            uk-close
          ></button>

          <div className="modal__leftpanel">
            <img loading="lazy" src="./img/svg/noimage.gif" alt="" />
          </div>
          <div className="modal__rightpanel">
            <div className="rightpanel__header">
              <img loading="lazy" src="./img/svg/Fire.svg" alt="" />
              <h4>Пепперони по-деревенски</h4>
              <img loading="lazy" src="./img/svg/Info.svg" alt="" />
            </div>
            <div className="rightpanel__ingredients">
              <div className="ingredient__block">
                <button className="button button-modal-select">
                  <img loading="lazy" src="./img/svg/Cheese.svg" alt="" />
                </button>
                <p>Моцарелла</p>
              </div>
              <div className="ingredient__block">
                <button className="button button-modal-select">
                  <img loading="lazy" src="./img/svg/Cucumber.svg" alt="" />
                </button>
                <p>Огурцы маринованные</p>
              </div>
              <div className="ingredient__block">
                <button className="button button-modal-select">
                  <img loading="lazy" src="./img/svg/Pepperoni.svg" alt="" />
                </button>
                <p>Пепперони</p>
              </div>
              <div className="ingredient__block">
                <button className="button button-modal-select">
                  <img loading="lazy" src="./img/svg/Sause.svg" alt="" />
                </button>
                <p>Томатный соус</p>
              </div>
            </div>
            <div className="rightpanel__dough">
              <div className="dough__type">
                <button className="button button-border button-border-focus">
                  Традиционное
                </button>
                <button className="button button-border">Тонкое</button>
              </div>
              <div className="dough__size">
                <button className="button button-border button-border-focus">
                  20 см
                </button>
                <button className="button button-border">28 см</button>
                <button className="button button-border">33 см</button>
              </div>
            </div>
            <div className="rightpanel__topping">
              <div className="topping__title">Добавьте в пиццу</div>
              <div className="topping__list">
                <div className="ingredient__block">
                  <button className="button button-modal-select">
                    <img loading="lazy" src="./img/svg/Cheese.svg" alt="" />
                  </button>
                  <p>Моцарелла</p>
                </div>
                <div className="ingredient__block">
                  <button className="button button-modal-select">
                    <img loading="lazy" src="./img/svg/Mushrooms.svg" alt="" />
                  </button>
                  <p>Шампиньоны</p>
                </div>
                <div className="ingredient__block">
                  <button className="button button-modal-select">
                    <img loading="lazy" src="./img/svg/Onion.svg" alt="" />
                  </button>
                  <p>Красный лук</p>
                </div>
                <div className="ingredient__block">
                  <button className="button button-modal-select">
                    <img loading="lazy" src="./img/svg/BellPepper.svg" alt="" />
                  </button>
                  <p>Сладкий перец</p>
                </div>
              </div>
            </div>
            <div className="rightpanel__price">
              <div className="price__total">
                <div className="price__price">Итого: 379 ₽</div>
                <div className="price__gramms">410 г</div>
              </div>
              <button className="button button-border">Добавить</button>
            </div>
          </div>
        </div>
      </div>
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
      <main>
        <div className="sticky-cart">
          <button>
            <div>
              <span>5</span>
            </div>
            <img loading="lazy" src="./img/svg/Shoppingbag.svg" alt="" />
          </button>
        </div>
        <div className="header-sticky">
          <div className="container">
            <ul className="header-sticky__nav-bar">
              <a href="#" className="logo">
                <img loading="lazy" src="./img/svg/Pizza.svg" alt="" />
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
                <div className="popup-other" uk-dropdown="mode:click">
                  <ul className="uk-nav uk-dropdown-nav">
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
                className="uk-hidden@m uk-navbar uk-navbar-container"
                style={{backgroundColor: '#fff'}}
              >
                <div className="uk-navbar-center">
                  <a
                    className="uk-navbar-toggle"
                    href="#"
                    style={{minHeight: '30px'}}
                    uk-toggle="target: #modal-menu-burger"
                  >
                    <img loading="lazy" src="./img/svg/Menu.svg" alt="" />
                  </a>
                </div>
              </nav>
            </ul>
          </div>
        </div>
        <div className="container">
          <div id="modal-menu-burger" hidden>
            <div className="uk-modal-dialog">
              <div className="uk-modal-header">
                <h2 className="uk-modal-title">Modal Title</h2>
              </div>
              <div className="uk-modal-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="uk-modal-footer uk-text-center">
                <span>Время работы c 11:00 до 23:00</span>
              </div>
            </div>
          </div>
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
          <section className="advertising" id="advertisinglink">
            <nav uk-slider>
              <ul className="advertising__content uk-slider-items">
                <li>
                  <a href="#" className="advertising__card">
                    <img
                      loading="lazy"
                      src="img/pizza-src/tripple-pizza.svg"
                      alt=""
                    />
                    <h3>3 средние пиццы от 999 рублей</h3>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="advertising__card advertising__card__red"
                  >
                    <img
                      loading="lazy"
                      src="img/pizza-src/pizza-box.svg"
                      alt=""
                    />
                    <h3>Кэшбек 10% на самовывоз (доставка)</h3>
                  </a>
                </li>
                <li>
                  <a href="#" className="advertising__card">
                    <img
                      loading="lazy"
                      src="img/pizza-src/tripple-pizza.svg"
                      alt=""
                    />
                    <h3>3 средние пиццы от 999 рублей</h3>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="advertising__card advertising__card__red"
                  >
                    <img
                      loading="lazy"
                      src="img/pizza-src/pizza-box.svg"
                      alt=""
                    />
                    <h3>Кэшбек 10% на самовывоз (доставка)</h3>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <section className="check-address" id="check-address">
            <label className="check-address__input-label" for="address">
              Проверить адрес доставки
            </label>
            <div className="check-address__wrapper">
              <input
                className="check-address__input-input"
                placeholder="Адрес"
                type="search"
                id="address"
              />
              <button className="button check-address__input-button"></button>
            </div>
          </section>
          <section className="main-content">
            <div className="heading heading-filter">
              <h2 id="pizzalink">Пицца</h2>
              <button className="button button-filter">
                <img loading="lazy" src="./img/svg/Filter.svg" alt="" />
                <span>Фильтры</span>
              </button>
            </div>
            <div className="content content-pizza"></div>
            <div className="heading heading-filter">
              <h2 id="sushilink">Суши</h2>
              <button className="button button-filter">
                <img loading="lazy" src="./img/svg/Filter.svg" alt="" />
                <span>Фильтры</span>
              </button>
            </div>
            <div className="content content-sushi"></div>
            <div className="heading">
              <h2 id="snackslink">Закуски</h2>
            </div>
            <div className="content content-snacks"></div>
            <div className="heading">
              <h2 id="desertslink">Десерты</h2>
            </div>
            <div className="content content-deserts"></div>
            <div className="heading">
              <h2 id="drinkslink">Напитки</h2>
            </div>
            <div className="content content-drinks"></div>
            <div className="heading">
              <h2 id="saucelink">Соусы</h2>
            </div>
            <div className="content content-sauce"></div>
            <div className="heading">
              <h2 id="combolink">Комбо</h2>
            </div>
            <div className="content content-combo">
              <div className="content-card">
                <img loading="lazy" src="./img/combo-src/combo1.png" alt="" />
                <div className="content-card_description">
                  <h3>Картофель фри</h3>
                  <p>
                    Семга, рис, сыр креметто, соус унаги, креветка, авокадо,
                    чип...
                  </p>
                  <div className="content-card_select">
                    <button className="button button-select">Выбрать</button>
                    <span>120 ₽</span>
                  </div>
                </div>
              </div>
              <div className="content-card">
                <img loading="lazy" src="./img/combo-src/combo2.png" alt="" />
                <div className="content-card_description">
                  <h3>Крылья-гриль</h3>
                  <p>
                    Сливочный сыр, семга татаки с тростниковым сахаром, соус
                    у...
                  </p>
                  <div className="content-card_select">
                    <button className="button button-select">Выбрать</button>
                    <span>270 ₽</span>
                  </div>
                </div>
              </div>
              <div className="content-card">
                <img loading="lazy" src="./img/combo-src/combo3.png" alt="" />
                <div className="content-card_description">
                  <h3>Наггетсы</h3>
                  <p>
                    Действительно много семги, сливочный сыр, огурец, рис, нори
                  </p>
                  <div className="content-card_select">
                    <button className="button button-select">Выбрать</button>
                    <span>170 ₽</span>
                  </div>
                </div>
              </div>
              <div className="content-card">
                <img loading="lazy" src="./img/combo-src/combo4.png" alt="" />
                <div className="content-card_description">
                  <h3>Ролл</h3>
                  <p>
                    Тигровая креветка, огурец, авокадо, соус Айоли, рис, икра
                    тобико
                  </p>
                  <div className="content-card_select">
                    <button className="button button-select">Выбрать</button>
                    <span>200 ₽</span>
                  </div>
                </div>
              </div>
              <div className="content-card">
                <img loading="lazy" src="./img/combo-src/combo1.png" alt="" />
                <div className="content-card_description">
                  <h3>Картофель фри</h3>
                  <p>
                    Семга, рис, сыр креметто, соус унаги, креветка, авокадо,
                    чип...
                  </p>
                  <div className="content-card_select">
                    <button className="button button-select">Выбрать</button>
                    <span>120 ₽</span>
                  </div>
                </div>
              </div>
              <div className="content-card">
                <img loading="lazy" src="./img/combo-src/combo2.png" alt="" />
                <div className="content-card_description">
                  <h3>Крылья-гриль</h3>
                  <p>
                    Сливочный сыр, семга татаки с тростниковым сахаром, соус
                    у...
                  </p>
                  <div className="content-card_select">
                    <button className="button button-select">Выбрать</button>
                    <span>270 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content-about">
            <h2>Доставка пиццы в Москве</h2>
            <div>
              Захотелось чего-то вкусного и сытного? Желание простое и понятное,
              только в холодильнике все не то, и до магазина идти лень. Все
              пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам
              на помощь спешит супергерой – Domino’s Pizza! Как у всякого
              супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный
              вкус продукции из отборных ингредиентов; широкий ассортимент,
              включающий легендарные, фирменные и классические виды, для
              вегетарианцев и любителей экспериментировать; быстрая и бесплатная
              доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо
              не успевало остыть.
              <h4>Как сделать заказ</h4>
              <p>
                Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать
                или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом
                в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам
                необходимо: выбрать понравившийся вариант и количество порций;
                положить желаемое в «Корзину»; не уходить далеко, так как
                вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей
                пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
              </p>
            </div>
            <a href="#">Показать полностью</a>
          </section>
        </div>
      </main>
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
                      style={{display: 'inline-block'}}
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
    </div>
  );
}

export default App;
