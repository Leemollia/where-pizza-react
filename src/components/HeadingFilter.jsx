import { useState, useRef, memo } from "react";
import { Drawer } from "@mui/material";

import FilterMenu from "../pages/components/filterMenu/filterMenu";
import Button from "../UI/Button";

import useIsMobile from "../hooks/useIsMobile";

const HeadingFilter = memo(({ category }) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const haveFilter = useRef(false);

  if (
    category.toLowerCase() === "pizza" ||
    category.toLowerCase() === "sushi"
  ) {
    haveFilter.current = true;
  }

  return (
    <div className="heading heading-filter">
      <h2>{category}</h2>
      {haveFilter.current && (
        <>
          <Button className="button-filter" onClick={() => setOpen(!open)}>
            <img loading="lazy" src="img/svg/Filter.svg" alt="" />
            <span>Фильтры</span>
          </Button>
          <Drawer
            anchor={isMobile ? "bottom" : "right"}
            open={open}
            onClose={() => setOpen(!open)}
            PaperProps={{
              sx: { width: isMobile ? "100%" : "40%" },
            }}
          >
            <FilterMenu />
          </Drawer>
        </>
      )}
    </div>
  );
});

export default HeadingFilter;
