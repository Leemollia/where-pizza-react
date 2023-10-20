import { useEffect, useRef, useState } from "react";

import BurgerMenuButton from "../../../components/buttons/BurgerMenuButton";
import MainLogo from "../../../components/MainLogo";

import Button from "../../../UI/Button";

import useIsMobile from "../../../hooks/useIsMobile";

import { ReactComponent as ShoppingBagSvg } from "../../../assets/img/svg/Shoppingbag.svg";
import { Drawer } from "@mui/material";

const Header = ({ hideHeaderDown = true }) => {
  const headerRef = useRef();
  const headerUpElement = useRef();
  const isMobile = useIsMobile();
  const [offsetTopHeight, setOffsetTopHeight] = useState("0px");
  const [openBurger, setOpenBurger] = useState(false);

  useEffect(() => {
    const setDataHeightHandler = () => {
      const height = headerRef.current.querySelector('.preheader').offsetHeight;
      document.documentElement.style.setProperty(
        "--header-offset-top",
        offsetTopHeight
      );

      if (!hideHeaderDown) return;

      setOffsetTopHeight(`-${height + 1}px`);
    };

    setDataHeightHandler();
    window.addEventListener("resize", setDataHeightHandler);

    return () => {
      window.removeEventListener("resize", setDataHeightHandler);
    };
  }, [hideHeaderDown, offsetTopHeight]);

  function HeaderUp() {
    return (
      <div className="header__up" ref={headerUpElement}>
        <div className="header__panel header__panel--between">
          <div className="header__block">
            <img
              loading="lazy"
              id="locationsvg"
              src="./img/svg/Location2.svg"
              alt=""
              width={12}
              height={12}
            />
            <span>Москва</span>
            <img
              loading="lazy"
              id="arrowdownsvg"
              src="./img/svg/Arrowdown.svg"
              alt=""
              width={12}
              height={12}
            />
          </div>
          <div className="header__block hide-mob">
            <a href="#check-address">Проверить адрес</a>
          </div>
          <div className="header__block">
            Среднее время доставки*: <strong>00:24:19</strong>
          </div>
        </div>
        <div className="header__panel hide-mob">
          <div className="header__block">Время работы c 11:00 до 23:00</div>
          <div className="header__block">
            <img
              loading="lazy"
              id="accountsvg"
              src="./img/svg/Account.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>Войти в аккаунт</span>
          </div>
        </div>
      </div>
    );
  }

  function HeaderDown() {
    return (
      <div className="header__down">
        <div className="header__panel">
          <MainLogo />
        </div>
        <div className="header__panel">
          <div className="header__block">
            {isMobile ? (
              <>
                <BurgerMenuButton onClick={() => setOpenBurger(true)} />
                <Drawer
                  hideBackdrop={true}
                  anchor="top"
                  open={openBurger}
                  onClose={() => setOpenBurger(false)}
                  PaperProps={{
                    sx: {
                      top: headerRef.current ? `${headerRef.current.offsetHeight}px` : '10px',
                    },
                  }}
                >
                  <div className="1">1</div>
                  <div className="1">2</div>
                  <div className="1">3</div>
                </Drawer>
              </>
            ) : (
              <Button>
                <ShoppingBagSvg />
                <span>0p</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="container preheader">
        <HeaderUp />
      </div>
      <div className="container">
        <HeaderDown />
      </div>
    </header>
  );
};

export default Header;
