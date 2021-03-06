import React from 'react'

function Advertising() {
  return (
    <section className="advertising" id="advertisinglink">
            <nav>
              <ul className="advertising__content">
                <li>
                  <a href="#" className="advertising__card">
                    <img
                      loading="lazy"
                      src="../img/pizza-src/tripple-pizza.svg"
                      alt=""
                    />
                    <h3>3 средние пиццы от 999 рублей</h3>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="advertising__card advertising__card__red"
                  >
                    <img
                      loading="lazy"
                      src="../img/pizza-src/pizza-box.svg"
                      alt=""
                    />
                    <h3>Кэшбек 10% на самовывоз (доставка)</h3>
                  </a>
                </li>
                <li>
                  <a href="#" className="advertising__card">
                    <img
                      loading="lazy"
                      src="../img/pizza-src/tripple-pizza.svg"
                      alt=""
                    />
                    <h3>3 средние пиццы от 999 рублей</h3>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="advertising__card advertising__card__red"
                  >
                    <img
                      loading="lazy"
                      src="../img/pizza-src/pizza-box.svg"
                      alt=""
                    />
                    <h3>Кэшбек 10% на самовывоз (доставка)</h3>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
  )
}

export default Advertising