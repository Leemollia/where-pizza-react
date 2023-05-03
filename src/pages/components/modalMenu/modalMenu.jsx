import React from "react";

const ModalMenu = () => {
  return (
    <div id="modal-menu" className="uk-flex-top" data-uk-modal>
      <div className="modal-menu uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <div className="modal__line"></div>
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close
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
  );
};

export default ModalMenu;
