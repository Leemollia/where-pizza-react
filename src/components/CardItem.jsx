import { useState } from "react";
import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../store/slice/modalCardSlice";

import { Drawer, Modal } from "@mui/material";

import Button from "../UI/Button";
import ModalMenu from "../pages/components/modalMenu/modalMenu";
import useIsMobile from "../hooks/useIsMobile";

function CardItem({ data }) {
  const isMobile = useIsMobile();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const Label = ({ labelHit, labelNew }) => {
    return (
      <>
        {labelHit && <div className="content-card__label">New</div>}
        {labelNew && <div className="content-card__label">ХИТ</div>}
      </>
    );
  };

  const Title = () => {
    return data.title ? <h3>{data.title}</h3> : "";
  };

  const Description = () => {
    return data.description ? <p>{data.description}</p> : "";
  };

  const Ingredients = () => {
    return data.ingredients ? <p>{data.ingredients.join(", ")}</p> : "";
  };

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="content-card">
      <div className="content-card__image">
        {<Label labelNew={data.new} labelHit={data.hit} />}
        <img loading="lazy" src={data.image} alt={data.title} />
      </div>
      <div className="content-card__description">
        {<Title />}
        {<Description />}
        {<Ingredients />}
        <div className="content-card__select">
          <Button onClick={toggleModal} className={"button--select"}>
            <span>{"от " + data.price + " ₽"}</span>
          </Button>
          {isMobile ? (
            <Drawer open={openModal} anchor="bottom" onClose={toggleModal}>
              <ModalMenu data={data} />
            </Drawer>
          ) : (
            <Modal open={openModal} onClose={toggleModal}>
              <ModalMenu
                slots={{  
                  backdrop: {
                    sx: {
                      backdropFilter: "blur(5px)"
                    }
                  },
                }}
                data={data}
                closeHandler={toggleModal}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
