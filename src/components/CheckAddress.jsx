import React from 'react'

function CheckAddress() {
  return (
    <section className="check-address" id="check-address">
            <label className="check-address__input-label" htmlFor="address">
              Проверить адрес доставки
            </label>
            <div className="check-address__wrapper">
              <input
                className="check-address__input-input"
                placeholder="Адрес"
                type="search"
                id="address"
              />
              <button className="button check-address__input-button"></button>
            </div>
          </section>
  )
}

export default CheckAddress