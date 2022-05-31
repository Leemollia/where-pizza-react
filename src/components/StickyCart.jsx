import React from "react";

function StickyCart() {
  window.onscroll = function showStickyCart() {
    const buttonStickyCart = document.querySelector(".sticky-cart");
    if (window.innerWidth < 960) {
      if (document.documentElement.scrollTop > 180) {
        buttonStickyCart.style.transform = "translateY(-80px)";
      } else if (document.documentElement.scrollTop < 180) {
        buttonStickyCart.style.transform = "translateY(80px)";
      }
    }
  };
  return (
    <div className="sticky-cart">
      <button>
        <div>
          <span>0</span>
        </div>
        <img loading="lazy" src={"./img/svg/Shoppingbag.svg"} alt="" />
      </button>
    </div>
  );
}

export default StickyCart;
