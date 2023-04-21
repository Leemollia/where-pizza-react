import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../store/slice/modalCardSlice";

function Card({ data }) {
  const dispatch = useDispatch();

  const RenderLabel = ({ labelHit, labelNew }) => {
    return (
      <>
        { labelHit && <div className="content-card__label">New</div>}
        {labelNew && <div className="content-card__label">ХИТ</div>}
      </>
    );
  };

  const openModal = () => {
    dispatch(showModal({cardData: data}))
  };

  return (
    <>
      <div className="content-card">
        {<RenderLabel labelNew={data.new} labelHit={data.hit} />}
        <img loading="lazy" src={data.image} alt=""></img>
        <div className="content-card_description">
          <h3>{data.title}</h3>
          {data.description ? <p>{data.description}</p> : ""}
          {data.ingredients ? <p>{data.ingredients.join(", ")}</p> : ""}
          <div className="content-card_select">
            <button onClick={openModal} className="button button-select">
              <span>{"от " + data.price + " ₽"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card };
