import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../assets/img/svg/Pizza.svg";

const MainLogo = ({ withText = true, text = "Куда пицца" }) => {
  return (
    <Link to="/" className="mainlogo">
      <LogoSvg width={32} height={32} />
      {withText && <span className="mainlogo__text">{text}</span>}
    </Link>
  );
};

export default MainLogo;
