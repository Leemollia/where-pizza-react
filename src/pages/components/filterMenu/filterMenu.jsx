import { useState } from "react";
import Button from "../../../UI/Button";

const FilterMenu = () => {
  const categories = {
    alias: {
      title: "Общие",
      items: [
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
    },
    cheese: {
      title: "Сыр",
      items: [
        "Реджанито",
        "Моцарелла",
        "Чеддер",
        "С голубой плесенью",
        "Смесь итальянских сыров",
        "Мягкий молодой сыр",
      ],
    },
    meat: {
      title: "Мясо",
      items: [
        "Пепперони",
        "Свинина",
        "Ветчина",
        "Бекон",
        "Чоризо",
        "Колбаски",
        "Куриная грудка",
      ],
    },
    components: {
      title: "Компоненты",
      items: [
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
    },
  };

  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const changeFilteredIngredients = (button) => {
    const inner = button.currentTarget.innerText;
    button.currentTarget.classList.toggle("button--border-focus");

    if (filteredIngredients.includes(inner)) {
      let numb = filteredIngredients.findIndex((i) => i === inner);
      filteredIngredients.splice(numb, 1);
      return setFilteredIngredients([...filteredIngredients]);
    } else {
      setFilteredIngredients([...filteredIngredients, inner]);
    }
  };

  const resetFilteredIngredients = () => {
    document
      .querySelectorAll(".button.button--border.button--border-focus")
      .forEach((button) => {
        button.classList.remove("button--border-focus");
      });
    document.querySelector("#filter-menu").classList.toggle("active");
    setFilteredIngredients([]);
  };

  return (
    <div id="filter-menu">
      <div className="offcanvas-bar__menu">
        <h2>Фильтры</h2>
        {Object.values(categories).map((category, index) => {
          const { title, items } = category;

          return (
            <div key={index}>
              <p>{title}</p>
              <div className="offcanvas-bar__items">
                {items.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={changeFilteredIngredients}
                      className="button--border"
                    >
                      {item}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="offcanvas-bar__footer">
        <Button onClick={resetFilteredIngredients} className="button--border">
          Сбросить
        </Button>
        <Button
          onClick={() =>
            document.querySelector("#filter-menu").classList.toggle("active")
          }
          className="button--border-focus"
        >
          Применить {filteredIngredients.length > 0 && `(${filteredIngredients.length})`}
        </Button>
      </div>
    </div>
  );
};

export default FilterMenu;
