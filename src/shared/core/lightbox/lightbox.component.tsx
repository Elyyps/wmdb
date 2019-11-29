import * as React from "react";
import styles from "./lightbox-component.module.scss";
import ReactDOM from "react-dom";
import { IconComponent } from "../icon";
import CROSS from "@assets/icons/cross.svg";
export interface ILightBoxComponentProps {
  children: JSX.Element;
  heightLightBoxContent: number;
  isLightBoxOpen?: boolean;
  setLightBoxOpen: (value: boolean) => void;
}
const LightBoxComponent = (props: ILightBoxComponentProps) => {
  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === "Escape") props.setLightBoxOpen(false);
  };
  const modalRef = React.createRef<HTMLDivElement>();
  const onClickAway = (e: any) => {
    if (modalRef.current && modalRef.current && modalRef.current.contains(e.target)) return;
    props.setLightBoxOpen(false);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (!!window) {
        window.removeEventListener("keydown", onKeyDown);
      }
    };
  }, []);

  React.useEffect(() => {
    if (props.isLightBoxOpen) {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "hidden";
      }
    }

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "auto";
      }
    };
  }, [props.isLightBoxOpen]);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          <div
            role="button"
            onClick={(e): any => {
              onClickAway(e);
            }}
            className={`${styles["modal"]} ${styles[props.isLightBoxOpen ? "modal-open" : ""]} `}
          >
            <span role={"button"} className={styles["close"]} onClick={() => props.setLightBoxOpen(false)}>
              <IconComponent icon={CROSS} fillColor={"white"} />
            </span>
          </div>
          <div
            style={{ top: `${props.heightLightBoxContent}%` }}
            className={`${styles["modal__center-content"]} ${styles[props.isLightBoxOpen ? "modal-open" : ""]} `}
            ref={modalRef}
          >
            {props.children}
          </div>
        </React.Fragment>,
        document.body
      )}
    </React.Fragment>
  );
};

export { LightBoxComponent };
