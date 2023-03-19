import { useEffect, useMemo } from "react";

const modalCardRoot = document.querySelector("#modal-card-root");

const ModalCard = (props) => {
  const { mar } = props;
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalCardRoot.appendChild(element);

    return () => {
      modalCardRoot.removeChild(element);
    };
  });

  return <div>{mar}</div>;
};

export default ModalCard;
