import {useState} from "react";

const FilterMenu = () => {
  // Устанавливаем состояние пустого массива и принимаем в этот массив значение нажатой кнопки
  const [count, setCount] = useState([]);

  const changeCount = (button) => {
    // Получаем название кнопки
    const inner = button.currentTarget.innerText;
    // Добавляем класс "активной" кнопки
    button.currentTarget.classList.toggle("button-border-focus");

    // Делаем проверку
    // Если данное значение уже есть в массиве, то удаляем его и возвращаем массив без этого элемента
    if (count.includes(inner)) {
      let numb = count.findIndex((i) => i === inner);
      count.splice(numb, 1);
      return setCount([...count]);
    } else {
      // Иначе добавляем значение в массив
      setCount([...count, inner]);
    }
  };

  // Убираем все "активные" классы у кнопок и меняем массив на пустой
  const resetCount = () => {
    document
      .querySelectorAll(".button.button-border.button-border-focus")
      .forEach((button) => {
        button.classList.remove("button-border-focus");
      });
    document.querySelector("#filter-menu").classList.toggle("active");
    setCount([]);
  };
  return (
    <div id="filter-menu" data-uk-offcanvas="overlay:true; flip:true">
      <div className="uk-offcanvas-bar offcanvas-bar">
        <button className="" type="button"></button>
        <div className="offcanvas-bar__menu">
          <h2>Фильтры</h2>
          <p>Общее</p>
          <ul className="offcanvas-bar__items">
            <button onClick={changeCount} className="button button-border">
              Хит
            </button>
            <button onClick={changeCount} className="button button-border">
              Новинка
            </button>
            <button onClick={changeCount} className="button button-border">
              С мясом
            </button>
            <button onClick={changeCount} className="button button-border">
              Вегетарианская
            </button>
            <button onClick={changeCount} className="button button-border">
              С курицей
            </button>
            <button onClick={changeCount} className="button button-border">
              Без лука
            </button>
            <button onClick={changeCount} className="button button-border">
              С грибами
            </button>
            <button onClick={changeCount} className="button button-border">
              С морепродуктами
            </button>
            <button onClick={changeCount} className="button button-border">
              Барбекю
            </button>
          </ul>
          <p>Сыр</p>
          <ul className="offcanvas-bar__items">
            <button onClick={changeCount} className="button button-border">
              Реджанито
            </button>
            <button onClick={changeCount} className="button button-border">
              Моцарелла
            </button>
            <button onClick={changeCount} className="button button-border">
              Чеддер
            </button>
            <button onClick={changeCount} className="button button-border">
              С голубой плесенью
            </button>
            <button onClick={changeCount} className="button button-border">
              Смесь итальянских сыров
            </button>
            <button onClick={changeCount} className="button button-border">
              Без лука
            </button>
            <button onClick={changeCount} className="button button-border">
              Мягкий молодой сыр
            </button>
          </ul>
          <p>Мясо</p>
          <ul className="offcanvas-bar__items">
            <button onClick={changeCount} className="button button-border">
              Пепперони
            </button>
            <button onClick={changeCount} className="button button-border">
              Свинина
            </button>
            <button onClick={changeCount} className="button button-border">
              Ветчина
            </button>
            <button onClick={changeCount} className="button button-border">
              Бекон
            </button>
            <button onClick={changeCount} className="button button-border">
              Чоризо
            </button>
            <button onClick={changeCount} className="button button-border">
              Колбаски
            </button>
            <button onClick={changeCount} className="button button-border">
              Куриная грудка
            </button>
          </ul>
          <p>Компонент</p>
          <ul className="offcanvas-bar__items">
            <button onClick={changeCount} className="button button-border">
              Креветка
            </button>
            <button onClick={changeCount} className="button button-border">
              Ананасы
            </button>
            <button onClick={changeCount} className="button button-border">
              Шампиньоны
            </button>
            <button onClick={changeCount} className="button button-border">
              Лук
            </button>
            <button onClick={changeCount} className="button button-border">
              Перец халапеньо
            </button>
            <button onClick={changeCount} className="button button-border">
              Орегано
            </button>
            <button onClick={changeCount} className="button button-border">
              Зеленый перец
            </button>
            <button onClick={changeCount} className="button button-border">
              Томаты
            </button>
            <button onClick={changeCount} className="button button-border">
              Чеснок
            </button>
            <button onClick={changeCount} className="button button-border">
              Красный перец
            </button>
            <button onClick={changeCount} className="button button-border">
              Оливки
            </button>
            <button onClick={changeCount} className="button button-border">
              Маслины
            </button>
            <button onClick={changeCount} className="button button-border">
              Клубника
            </button>
            <button onClick={changeCount} className="button button-border">
              Смесь итальянских трав
            </button>
          </ul>
        </div>
        <div className="offcanvas-bar__footer">
          <button onClick={resetCount} className="button button-border">
            Сбросить
          </button>
          <button
            onClick={() =>
              document.querySelector("#filter-menu").classList.toggle("active")
            }
            className="button button-border-focus"
          >
            Применить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
