import * as React from "react";
import "./modal-navbar.component.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import CLOSE_ICON from "@assets/icons/cross.svg";

interface IModalNavBarProps {
  children?: any;
  className?: string;
  close?: string;
  icon?: any;
  iconSize?: any;
  title?: string;
}

const ModalNavBar = (props: IModalNavBarProps) => {
  const [isOpen, setIsMenuOpened] = React.useState(false);

  const toggleOpened = () => {
    setIsMenuOpened(false);
  };

  const styleOpened = isOpen ? "opened" : "closed";

  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={props.className}>
      <button
        type="button"
        className="modal-navbar__open"
        onClick={() => {
          setIsMenuOpened(true);
        }}
      >
        <IconComponent icon={props.icon} size={props.iconSize} />
        <span className="uk-visible@s">{props.title}</span>
      </button>

      <div className={`modal-navbar ${styleOpened}`}>
        <div className="modal-navbar__holder">
          <div className="modal-navbar__container">
            <div role="button" aria-label="closeButton" className="modal-navbar__close" onClick={toggleOpened}>
              <IconComponent icon={CLOSE_ICON} size="12px" />
              <span className="uk-visible@m">{props.close}</span>
            </div>

            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalNavBar };
