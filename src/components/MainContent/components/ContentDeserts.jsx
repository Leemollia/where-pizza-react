import React from "react";

function ContentDeserts({items}) {
  return (
    <div>
      <div className="heading">
        <h2 id="desertslink">Десерты</h2>
      </div>
      <div className="content content-deserts">
        {items.deserts.map((item) => (
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
              <p>{item.ingredients}</p>
              <div className="content-card_select">
                <button
                  className="button button-select"
                  uk-toggle="target: #modal-menu"
                >
                  <span>{"от " + item.price + " ₽"}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentDeserts;
