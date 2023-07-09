import { forwardRef } from "react";
import ModalCloseButton from "../../../components/buttons/ModalCloseButton";
import Button from "../../../UI/Button";

const ModalMenu = forwardRef(({ data, closeHandler }, ref) => {
  const { title, description, image, hit, id, ingredients, price } = data;

  return (
    <section ref={ref} className="modal-detail-item" tabIndex={-1}>
      <div className="modal-detail-item__wrap">
        <ModalCloseButton className="button-modal-close" onClick={closeHandler} />
        <div className="modal-detail-item__leftpanel">
          <img loading="lazy" src={image} alt={title} />
        </div>
        <div className="modal-detail-item__rightpanel">
          <div className="rightpanel__header">
            <img loading="lazy" src="./img/svg/Fire.svg" alt="" />
            <h4>{title}</h4>
            <img loading="lazy" src="./img/svg/Info.svg" alt="" />
          </div>
          <div className="rightpanel__ingredients">
            {ingredients.map((ingredient, index) => {
              return (
                <div key={index} className="ingredient__block">
                  <button className="button button-modal-select">
                    <img loading="lazy" src="./img/svg/Cheese.svg" alt="" />
                  </button>
                  <p>{ingredient}</p>
                </div>
              );
            })}
          </div>
          <div className="rightpanel__dough">
            <div className="dough__type">
              <button className="button button--border button--border-focus">
                Традиционное
              </button>
              <button className="button button--border">Тонкое</button>
            </div>
            <div className="dough__size">
              <button className="button button--border button--border-focus">
                20 см
              </button>
              <button className="button button--border">28 см</button>
              <button className="button button--border">33 см</button>
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
            <Button className="button--select">Добавить</Button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ModalMenu;
