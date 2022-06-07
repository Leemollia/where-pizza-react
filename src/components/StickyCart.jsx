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

  const [count, setCount] = React.useState([]);
  function setCountFunc() {
    const rand = Math.random();
    setCount(count => [...count, rand]);
  }
  return (
    <div className="sticky-cart">
      <button onClick={setCountFunc}>
        <div>
          <span>{count}</span>
        </div>
        <img loading="lazy" src={"./img/svg/Shoppingbag.svg"} alt="" />
      </button>
    </div>
  );
}

export default StickyCart;
