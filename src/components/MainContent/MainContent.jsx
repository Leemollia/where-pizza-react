import React from "react";
import { useState, useEffect } from "react";
//import ContentPizza from "./components/ContentPizza"

function MainContent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://leemollia.github.io/where-pizza/database.json")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <section className="main-content">
        <div className="heading heading-filter">
          <h2 id="sushilink">Суши</h2>
          <button className="button button-filter">
            <img
              loading="lazy"
              src={require("../../img/svg/Filter.svg").default}
              alt=""
            />
            <span>Фильтры</span>
          </button>
        </div>
        <div className="content content-sushi">
        {items.sushi.map((item) => (
            <div className="content-card" key={item.id + item.title}>
              {(function() {
                  if (item.new) return <div className="content-card__label">New</div>
                  else if (item.hit) return <div className="content-card__label">Hit</div>
                  else {
                    return ''
                  }
                })()}
              <img loading="lazy" src={item.image}></img>
              <div className="content-card_description">
                <h3>{item.title}</h3>
                <p>{item.ingredients}</p>
                <div className="content-card_select">
                    <button className="button button-select" uk-toggle="target: #modal-menu">
                      <span>{"от " + item.price + " ₽"}</span>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="heading">
          <h2 id="snackslink">Закуски</h2>
        </div>
        <div className="content content-snacks">
        {items.snacks.map((item) => (
            <div className="content-card" key={item.id + item.title}>
              {(function() {
                  if (item.new) return <div className="content-card__label">New</div>
                  else if (item.hit) return <div className="content-card__label">Hit</div>
                  else {
                    return ''
                  }
                })()}
              <img loading="lazy" src={item.image}></img>
              <div className="content-card_description">
                <h3>{item.title}</h3>
                <p>{item.ingredients}</p>
                <div className="content-card_select">
                    <button className="button button-select" uk-toggle="target: #modal-menu">
                      <span>{"от " + item.price + " ₽"}</span>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="heading">
          <h2 id="desertslink">Десерты</h2>
        </div>
        <div className="content content-deserts">
        {items.deserts.map((item) => (
            <div className="content-card" key={item.id + item.title}>
              {(function() {
                  if (item.new) return <div className="content-card__label">New</div>
                  else if (item.hit) return <div className="content-card__label">Hit</div>
                  else {
                    return ''
                  }
                })()}
              <img loading="lazy" src={item.image}></img>
              <div className="content-card_description">
                <h3>{item.title}</h3>
                <p>{item.ingredients}</p>
                <div className="content-card_select">
                    <button className="button button-select" uk-toggle="target: #modal-menu">
                      <span>{"от " + item.price + " ₽"}</span>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="heading">
          <h2 id="drinkslink">Напитки</h2>
        </div>
        <div className="content content-drinks">
        {items.drinks.map((item) => (
            <div className="content-card" key={item.id + item.title}>
              {(function() {
                  if (item.new) return <div className="content-card__label">New</div>
                  else if (item.hit) return <div className="content-card__label">Hit</div>
                  else {
                    return ''
                  }
                })()}
              <img loading="lazy" src={item.image}></img>
              <div className="content-card_description">
                <h3>{item.title}</h3>
                <p>{item.ingredients}</p>
                <div className="content-card_select">
                    <button className="button button-select" uk-toggle="target: #modal-menu">
                      <span>{"от " + item.price + " ₽"}</span>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="heading">
          <h2 id="saucelink">Соусы</h2>
        </div>
        <div className="content content-sauce">
        {items.sauce.map((item) => (
            <div className="content-card" key={item.id + item.title}>
              {(function() {
                  if (item.new) return <div className="content-card__label">New</div>
                  else if (item.hit) return <div className="content-card__label">Hit</div>
                  else {
                    return ''
                  }
                })()}
              <img loading="lazy" src={item.image}></img>
              <div className="content-card_description">
                <h3>{item.title}</h3>
                <p>{item.ingredients}</p>
                <div className="content-card_select">
                    <button className="button button-select" uk-toggle="target: #modal-menu">
                      <span>{"от " + item.price + " ₽"}</span>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="heading">
          <h2 id="combolink">Комбо</h2>
        </div>
        <div className="content content-combo">
          <div className="content-card">
            <img
              loading="lazy"
              src={require("../../img/combo-src/combo1.png").default}
              alt=""
            />
            <div className="content-card_description">
              <h3>Картофель фри</h3>
              <p>
                Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...
              </p>
              <div className="content-card_select">
                <button className="button button-select">Выбрать</button>
                <span>120 ₽</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <img
              loading="lazy"
              src={require("../../img/combo-src/combo2.png").default}
              alt=""
            />
            <div className="content-card_description">
              <h3>Крылья-гриль</h3>
              <p>
                Сливочный сыр, семга татаки с тростниковым сахаром, соус у...
              </p>
              <div className="content-card_select">
                <button className="button button-select">Выбрать</button>
                <span>270 ₽</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <img
              loading="lazy"
              src={require("../../img/combo-src/combo3.png").default}
              alt=""
            />
            <div className="content-card_description">
              <h3>Наггетсы</h3>
              <p>Действительно много семги, сливочный сыр, огурец, рис, нори</p>
              <div className="content-card_select">
                <button className="button button-select">Выбрать</button>
                <span>170 ₽</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <img
              loading="lazy"
              src={require("../../img/combo-src/combo4.png").default}
              alt=""
            />
            <div className="content-card_description">
              <h3>Ролл</h3>
              <p>
                Тигровая креветка, огурец, авокадо, соус Айоли, рис, икра тобико
              </p>
              <div className="content-card_select">
                <button className="button button-select">Выбрать</button>
                <span>200 ₽</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <img
              loading="lazy"
              src={require("../../img/combo-src/combo1.png").default}
              alt=""
            />
            <div className="content-card_description">
              <h3>Картофель фри</h3>
              <p>
                Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...
              </p>
              <div className="content-card_select">
                <button className="button button-select">Выбрать</button>
                <span>120 ₽</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <img
              loading="lazy"
              src={require("../../img/combo-src/combo2.png").default}
              alt=""
            />
            <div className="content-card_description">
              <h3>Крылья-гриль</h3>
              <p>
                Сливочный сыр, семга татаки с тростниковым сахаром, соус у...
              </p>
              <div className="content-card_select">
                <button className="button button-select">Выбрать</button>
                <span>270 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainContent;
