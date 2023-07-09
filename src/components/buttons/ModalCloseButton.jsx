import Button from "../../UI/Button";
import { ReactComponent as CrossSvg } from "../../assets/img/svg/Cross.svg";

const ModalCloseButton = ({ onClick }) => {
  return (
    <Button className="button-modal-close" onClick={onClick}>
      <CrossSvg />
    </Button>
  );
}

export default ModalCloseButton;
