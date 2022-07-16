import React from "react";

function ContentSushi({items}) {
  return (
    <>
      <div className="heading heading-filter">
        <h2 id="sushilink">Суши</h2>
        <button className="button button-filter">
          <img loading="lazy" src="img/svg/Filter.svg" alt="" />
          <span>Фильтры</span>
        </button>
      </div>
      <div className="content content-sushi">
        {items.sushi.map((item) => (
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
            <img
              loading="lazy"
              src={item.image}
              width="100%"
              height="100%"
            ></img>
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
    </>
  );
}

export default ContentSushi;
