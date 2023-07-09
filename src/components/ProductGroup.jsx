import { useState, useEffect } from "react";
import { Drawer } from "@mui/material";

import CardItem from "./CardItem";
import FilterMenu from "../pages/components/filterMenu/filterMenu";
import Button from "../UI/Button";

import { capitalize } from "../util/TextUtil";
import useIsMobile from "../hooks/useIsMobile";

function ProductGroup({ category, items }) {
  const isMobile = useIsMobile();
  const [haveFilter, setHaveFilter] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (category === "pizza" || category === "sushi") {
      setHaveFilter(true);
    }
  }, []);

  return (
    <>
      <div className="heading heading-filter">
        {/* FIXME Capitalize not required */}
        <h2>{capitalize(category)}</h2>
        {haveFilter && (
          <>
            <Button className="button-filter" onClick={() => setOpen(!open)}>
              <img loading="lazy" src="img/svg/Filter.svg" alt="" />
              <span>Фильтры</span>
            </Button>
            <Drawer
              anchor= { isMobile ? "bottom" : "right"}
              open={open}
              onClose={() => setOpen(!open)}
              PaperProps={{
                sx: () => {
                  if (isMobile) {
                    return {
                      width: "100%",
                    };
                  }
                  return { width: "40%" };
                },
              }}
            >
              <FilterMenu />
            </Drawer>
          </>
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
