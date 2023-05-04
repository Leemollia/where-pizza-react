import { useState, useEffect, useRef } from "react";

import Button from "../../../UI/Button";

function StickyCart() {
  const [count, setCount] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const stickyCartEl = useRef();

  useEffect(() => {
    const setIsVisibleHandler = () => {
      if (window.innerWidth > 960) return;
      if (document.documentElement.scrollTop > 180) return setIsVisible(true);
      setIsVisible(false);
    };

    window.addEventListener("scroll", setIsVisibleHandler);

    return () => {
      window.removeEventListener("scroll", setIsVisibleHandler);
    };
  }, []);

  function setCountFn() {
    setCount((count) => count++);
  }

  return (
    <div
      className={`sticky-cart ${isVisible ? "" : "hidden"}`}
      ref={stickyCartEl}
    >
      <Button onClick={setCountFn}>
        <span>{count}</span>
        <img loading="lazy" src={"./img/svg/Shoppingbag.svg"} alt="" />
      </Button>
    </div>
  );
}

export default StickyCart;
