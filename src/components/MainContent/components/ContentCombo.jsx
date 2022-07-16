import React from "react";

function ContentCombo({items}) {
  return (
    <>
      <div className="heading">
        <h2 id="combolink">Комбо</h2>
      </div>
      <div className="content content-combo">
        <div className="content-card">
          <img loading="lazy" src="img/combo-src/combo1.png" alt="" />
          <div className="content-card_description">
            <h3>Картофель фри</h3>
            <p>
              Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...
            </p>
            <div className="content-card_select">
              <button className="button button-select">Выбрать</button>
              <span>120 ₽</span>
            </div>
          </div>
        </div>
        <div className="content-card">
          <img loading="lazy" src="img/combo-src/combo2.png" alt="" />
          <div className="content-card_description">
            <h3>Крылья-гриль</h3>
            <p>Сливочный сыр, семга татаки с тростниковым сахаром, соус у...</p>
            <div className="content-card_select">
              <button className="button button-select">Выбрать</button>
              <span>270 ₽</span>
            </div>
          </div>
        </div>
        <div className="content-card">
          <img loading="lazy" src="img/combo-src/combo3.png" alt="" />
          <div className="content-card_description">
            <h3>Наггетсы</h3>
            <p>Действительно много семги, сливочный сыр, огурец, рис, нори</p>
            <div className="content-card_select">
              <button className="button button-select">Выбрать</button>
              <span>170 ₽</span>
            </div>
          </div>
        </div>
        <div className="content-card">
          <img loading="lazy" src="img/combo-src/combo4.png" alt="" />
          <div className="content-card_description">
            <h3>Ролл</h3>
            <p>
              Тигровая креветка, огурец, авокадо, соус Айоли, рис, икра тобико
            </p>
            <div className="content-card_select">
              <button className="button button-select">Выбрать</button>
              <span>200 ₽</span>
            </div>
          </div>
        </div>
        <div className="content-card">
          <img loading="lazy" src="img/combo-src/combo1.png" alt="" />
          <div className="content-card_description">
            <h3>Картофель фри</h3>
            <p>
              Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...
            </p>
            <div className="content-card_select">
              <button className="button button-select">Выбрать</button>
              <span>120 ₽</span>
            </div>
          </div>
        </div>
        <div className="content-card">
          <img loading="lazy" src="/img/combo-src/combo2.png" alt="" />
          <div className="content-card_description">
            <h3>Крылья-гриль</h3>
            <p>Сливочный сыр, семга татаки с тростниковым сахаром, соус у...</p>
            <div className="content-card_select">
              <button className="button button-select">Выбрать</button>
              <span>270 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentCombo;
