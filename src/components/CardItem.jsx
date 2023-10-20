import { useState, memo } from "react";

import { Drawer, Modal, Dialog } from "@mui/material";
import { styled } from "@mui/system";

import Button from "../UI/Button";
import ModalMenu from "../pages/components/modalMenu/modalMenu";
import useIsMobile from "../hooks/useIsMobile";

const ModalMobile = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    top: "10%",
    borderRadius: "1rem 1rem 0 0",
  },
}));

const CardItem = memo(({ data }) => {
  const isMobile = useIsMobile();
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="content-card">
      <div className="content-card__image">
        {data.hit && <div className="content-card__label">New</div>}
        {data.new && <div className="content-card__label">ХИТ</div>}
        <img src={data.image} alt={data.title} />
      </div>
      <div className="content-card__description">
        {data.title ? <h3>{data.title}</h3> : ""}
        {data.description ? <p>{data.description}</p> : ""}
        {data.ingredients ? <p>{data.ingredients.join(", ")}</p> : ""}
        <div className="content-card__select">
          <Button onClick={toggleModal} className={"button--select"}>
            <span>{"от " + data.price + " ₽"}</span>
          </Button>
          {isMobile ? (
            <ModalMobile open={openModal} anchor="bottom" onClose={toggleModal}>
              <ModalMenu data={data} />
            </ModalMobile>
          ) : (
            <Dialog
              open={openModal}
              onClose={toggleModal}
              PaperProps={{
                sx: {
                  margin: "70px",
                  overflow: "visible",
                  maxWidth: "1070px",
                  borderRadius: "1rem",
                },
              }}
              sx={{
                backdropFilter: "blur(5px)",
              }}
            >
              <ModalMenu
                data={data}
                closeHandler={toggleModal}
              />
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
});

export default CardItem;
