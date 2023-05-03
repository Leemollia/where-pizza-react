import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../store/slice/modalCardSlice";

import Button from "../UI/Button";

function CardItem({ data }) {
  const dispatch = useDispatch();

  const Label = ({ labelHit, labelNew }) => {
    return (
      <>
        {labelHit && <div className="content-card__label">New</div>}
        {labelNew && <div className="content-card__label">ХИТ</div>}
      </>
    );
  };

  const Title = () => {
    return data.title ? <h3>{data.title}</h3> : "";
  };

  const Description = () => {
    return data.description ? <p>{data.description}</p> : "";
  };

  const Ingredients = () => {
    return data.ingredients ? <p>{data.ingredients.join(", ")}</p> : "";
  };

  const openModal = () => {
    dispatch(showModal({ cardData: data }));
  };

  return (
    <div className="content-card">
      <div className="content-card__image">
        {<Label labelNew={data.new} labelHit={data.hit} />}
        <img loading="lazy" src={data.image} alt={data.title} />
      </div>
      <div className="content-card__description">
        {<Title />}
        {<Description />}
        {<Ingredients />}
        <div className="content-card__select">
          <Button onClick={openModal} className={"button-select"}>
            <span>{"от " + data.price + " ₽"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
