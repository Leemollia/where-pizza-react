import React from 'react'

const FilterMenu = () => {
  return (
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
  )
}

export default FilterMenu