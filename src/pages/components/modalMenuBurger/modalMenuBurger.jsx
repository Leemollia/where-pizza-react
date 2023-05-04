import React from "react";

function ModalMenuBurger() {
  return (
    <div id="modal-menu-burger" hidden>
      <div className="uk-modal-dialog">
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Modal Title</h2>
        </div>
        <div className="uk-modal-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="uk-modal-footer uk-text-center">
          <span>Время работы c 11:00 до 23:00</span>
        </div>
      </div>
    </div>
  );
}

export default ModalMenuBurger;
