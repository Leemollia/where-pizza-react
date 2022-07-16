import React from "react";

const FilterMenu = () => {
  const ingredients = {
    general: [
      "Хит",
      "Новинка",
      "С мясом",
      "Вегетарианская",
      "С курицей",
      "Без лука",
      "С грибами",
      "С морепродуктами",
      "Барбекю",
    ],
    cheese: [
      "Реджанито",
      "Моцарелла",
      "Чеддер",
      "С голубой плесенью",
      "Смесь итальянских сыров",
      "Без лука",
      "Мягкий молодой сыр",
    ],
    meat: [
      "Пепперони",
      "Свинина",
      "Ветчина",
      "Бекон",
      "Чоризо",
      "Колбаски",
      "Куриная грудка",
    ],
    components: [
      "Креветка",
      "Ананасы",
      "Шампиньоны",
      "Лук",
      "Перец халапеньо",
      "Орегано",
      "Зеленый перец",
      "Томаты",
      "Чеснок",
      "Красный перец",
      "Оливки",
      "Маслины",
      "Клубника",
      "Смесь итальянских трав",
    ],
  };
  const [chosen, setChosen] = React.useState([]);

  const setChosenFunc = (elem) => {
    elem.target.classList.toggle("button-border-focus")
    setChosen += chosen.push(item)
    console.log(chosen, setChosen);
  }

  return (
    <div id="filter-menu">
      <div className=" offcanvas-bar">
        <button className="" type="button"></button>
        <div className="offcanvas-bar__menu">
          <h2>Фильтры</h2>
          <p>Общее</p>
          <ul className="offcanvas-bar__items">
            {ingredients.general.map((item, index) => {
              return (
                <button
                  key={index + item}
                  onClick={(elem) =>
                    setChosenFunc
                  }
                  className="button button-border"
                >
                  {item}
                </button>
              );
            })}
          </ul>
          <p>Сыр</p>
          <ul className="offcanvas-bar__items">
            {ingredients.cheese.map((item, index) => {
              return (
                <button
                  key={index + item}
                  onClick={(elem) =>
                    elem.target.classList.toggle("button-border-focus")
                  }
                  className="button button-border"
                >
                  {item}
                </button>
              );
            })}
          </ul>
          <p>Мясо</p>
          <ul className="offcanvas-bar__items">
            {ingredients.meat.map((item, index) => {
              return (
                <button
                  key={index + item}
                  onClick={(elem) =>
                    elem.target.classList.toggle("button-border-focus")
                  }
                  className="button button-border"
                >
                  {item}
                </button>
              );
            })}
          </ul>
          <p>Компонент</p>
          <ul className="offcanvas-bar__items">
            {ingredients.components.map((item, index) => {
              return (
                <button
                  key={index + item}
                  onClick={(elem) =>
                    elem.target.classList.toggle("button-border-focus")
                  }
                  className="button button-border"
                >
                  {item}
                </button>
              );
            })}
          </ul>
        </div>
        <div className="offcanvas-bar__footer">
          <button className="button button-border">Сбросить</button>
          <button className="button button-border-focus">Применить</button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
