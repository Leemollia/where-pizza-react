import { forwardRef } from "react";

import useHorizontalScroll from "../../../hooks/useHorizontalScroll";

import ModalCloseButton from "../../../components/buttons/ModalCloseButton";
import Button from "../../../UI/Button";
import ButtonGroup from "../../../UI/ButtonGroup";

import { ReactComponent as CrossSvg } from "../../../assets/img/svg/Cross.svg";
import useIsMobile from "../../../hooks/useIsMobile";

const ModalMenu = forwardRef(({ data, closeHandler }, ref) => {
  const isMobile = useIsMobile();
  const { title, description, image, hit, id, ingredients, price } = data;

  const removeIngredientHandler = (e) => {
    e.currentTarget.classList.toggle("inactive");
  };

  const addToppingHandler = (e) => {
    e.currentTarget.classList.toggle("added");
  };

  return (
    <section ref={ref} className="modal-detail-item" tabIndex={-1}>
      <div className="modal-detail-item__wrap">
        {!isMobile && (
          <ModalCloseButton
            className="button-modal-close"
            onClick={closeHandler}
          />
        )}
        <div className="modal-detail-item__leftpanel">
          <img loading="lazy" src={image} alt={title} />
        </div>
        <div className="modal-detail-item__rightpanel">
          <div className="rightpanel__header">
            <img loading="lazy" src="./img/svg/Fire.svg" alt="" />
            <h4>{title}</h4>
            <img loading="lazy" src="./img/svg/Info.svg" alt="" />
          </div>
          <div ref={useHorizontalScroll()} className="rightpanel__ingredients">
            {ingredients &&
              ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient__block">
                  <Button
                    className="ingredient__block__button"
                    onClick={removeIngredientHandler}
                  >
                    <CrossSvg />
                  </Button>
                  <span className="ingredient__block__title">{ingredient}</span>
                </div>
              ))}
          </div>
          <div className="rightpanel__dough">
            <div className="dough__type">
              <ButtonGroup>
                <Button>Традиционное</Button>
                <Button>Тонкое</Button>
              </ButtonGroup>
            </div>
            <div className="dough__size">
              <ButtonGroup>
                <Button>20 см</Button>
                <Button>28 см</Button>
                <Button>33 см</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="rightpanel__topping">
            <div className="topping__title">Добавьте в пиццу</div>
            <div ref={useHorizontalScroll()} className="topping__list">
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient__block">
                    <Button
                      className="ingredient__block__button"
                      onClick={addToppingHandler}
                    >
                      <CrossSvg />
                    </Button>
                    <span className="ingredient__block__title">
                      {ingredient}
                    </span>
                  </div>
                ))}
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
