import { useState } from "react";

import Button from "../UI/Button";

import { ReactComponent as MenuSvg } from "../assets/img/svg/Menu.svg";
import { ReactComponent as CrossSvg } from "../assets/img/svg/Cross.svg";

function BurgerMenuButton() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);


  return (
    <Button className="button--burger" >
      {isBurgerOpen ? <CrossSvg /> : <MenuSvg />}
    </Button>
  );
}

export default BurgerMenuButton;