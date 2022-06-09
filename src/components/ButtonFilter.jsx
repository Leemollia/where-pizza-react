import React from "react";

function buttonFilter() {
  return (
    <button
      className="button button-filter"
      onClick={() =>
        document.querySelector("#filter-menu").classList.toggle("active")
      }
    >
      <img loading="lazy" src="img/svg/Filter.svg" alt="" />
      <span>Фильтры</span>
    </button>
  );
}

export default buttonFilter;
