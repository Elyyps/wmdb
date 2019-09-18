import * as React from "react";
import styles from "./nav-bar-modal-component.module.scss";
import { IconComponent } from "../icon";
import { CLOSE_ICON } from "@app/constants/icons";
import ReactDOM from "react-dom";

export interface INavBarModalComponentProps {
  children?: any;
  className?: string;
  close?: string;
  icon?: any;
  iconSize?: any;
  title?: string;
}

const NavBarModalComponent = (props: INavBarModalComponentProps) => {
  const [isOpen, setIsMenuOpened] = React.useState(false);
  const toggleOpened = () => {
    setIsMenuOpened(false);
  };
  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === "Escape") setIsMenuOpened(false);
  };
  const modalRef = React.createRef<HTMLDivElement>();
  const onClickAway = (e: any) => {
    if (modalRef.current && modalRef.current && modalRef.current.contains(e.target)) return;
    setIsMenuOpened(false);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (!!window) {
        window.removeEventListener("keydown", onKeyDown);
      }
    };
  }, []);

  const styleOpened = isOpen ? "opened" : "closed";

  React.useEffect(() => {
    if (isOpen) {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "hidden";
      }
    }

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  return (
    <div className={styles["nav-bar-modal__toggle"]}>
      <button
        type="button"
        className={styles["nav-bar-modal__open"]}
        onClick={() => {
          setIsMenuOpened(true);
        }}
      >
        <IconComponent icon={props.icon} size={props.iconSize} />
        {props.title}
      </button>
      {typeof document !== "undefined" &&
        ReactDOM.createPortal(
          <div
            role={"role"}
            className={`${styles["nav-bar-modal"]} ${styles[styleOpened]}`}
            onClick={(e): any => {
              onClickAway(e);
            }}
          >
            <div
              className={`${styles["nav-bar-modal__holder"]} ${styles[`nav-bar-modal__holder__menu__close`]} ${
                isOpen ? styles[`nav-bar-modal__holder__menu__open`] : ""
              } `}
              ref={modalRef}
            >
              <div className={`${styles["nav-bar-modal__container"]} ${styles[`nav-bar-modal__container__menu`]}`}>
                <div
                  role="button"
                  aria-label="closeButton"
                  className={`${styles["nav-bar-modal__close"]} ${styles[`nav-bar-modal__close__menu`]}`}
                  onClick={toggleOpened}
                >
                  <IconComponent icon={CLOSE_ICON} size="12px" />
                  <span className="uk-visible@m">{props.close}</span>
                </div>
                <div className="nav-bar-modal__items">{props.children}</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export { NavBarModalComponent };
