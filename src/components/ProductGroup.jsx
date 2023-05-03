import { useState, useEffect } from "react";

import UIkit from "uikit";

import CardItem from "./CardItem";

import Button from "../UI/Button";

function ProductGroup({ category, items }) {
  const [haveFilter, setHaveFilter] = useState(false);

  useEffect(() => {
    if (category === "pizza" || category === "sushi") {
      setHaveFilter(true);
    }
  }, [category]);

  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function buttonFilterHandler() {
    return UIkit.offcanvas("#filter-menu").show();
  }

  return (
    <>
      <div className="heading heading-filter">
        <h2>{capitalize(category)}</h2>
        {haveFilter && (
          <Button className="button-filter" onClick={buttonFilterHandler}>
            <img loading="lazy" src="img/svg/Filter.svg" alt="" />
            <span>Фильтры</span>
          </Button>
        )}
      </div>
      <div className="content">
        {items.map((item) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default ProductGroup;
