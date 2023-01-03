import React from "react";
import ButtonFilter from "../../ButtonFilter";

function ContentPizza({ pizza }) {
  return (
    <>
      <div className="heading heading-filter">
        <h2 id="pizzalink">Пицца</h2>
        <ButtonFilter />
      </div>
      <div className="content content-pizza">
        {pizza.map((item) => (
          <div className="content-card" key={item.id + item.title}>
            {(function () {
              if (item.new)
                return <div className="content-card__label">New</div>;
              else if (item.hit)
                return <div className="content-card__label">Хит</div>;
              else {
                return "";
              }
            })()}
            <img loading="lazy" src={item.image}></img>
            <div className="content-card_description">
              <h3>{item.title}</h3>
              <p>{item.ingredients.join(", ")}</p>
              <div className="content-card_select">
                <button
                  className="button button-select"
                >
                  <span>{"от " + item.price + " ₽"}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContentPizza;
