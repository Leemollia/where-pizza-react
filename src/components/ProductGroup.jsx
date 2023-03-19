import { useState, useEffect } from "react";
import UIkit from "uikit";
import { Card } from "./Card";

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

  return (
    <>
      <div className="heading heading-filter">
        <h2 id="sushilink">{capitalize(category)}</h2>
        {haveFilter && (
          <button
            className="button button-filter"
            onClick={() =>
              UIkit.offcanvas('#filter-menu').show()
            }
          >
            <img loading="lazy" src="img/svg/Filter.svg" alt="" />
            <span>Фильтры</span>
          </button>
        )}
      </div>
      <div className="content">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default ProductGroup;
