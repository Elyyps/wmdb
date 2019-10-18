import * as React from "react";
import styles from "./module-section-component.module.scss";
import classNames from "classnames";
import { ImageComponent } from "../image";
import PATTERNT from "@assets/pattern/pattern-wmdb.png";

export interface IModuleSectionComponentProps {
  align?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  children?: any;
  paddingBottom?: string;
  paddingTop?: string;
  pattern?: boolean;
  size?: string;
  title?: string;
  titleColor?: string;
  visibility?: string;
}

const ModuleSectionComponent = (props: IModuleSectionComponentProps) => {
  const sectionClassName = classNames(styles["module-section"], {
    [styles[`module-section--${props.align}`]]: props.align,
    [styles[`module-section--${props.size}`]]: props.size
  });

  const style = {
    backgroundColor: props.backgroundColor,
    paddingBottom: props.paddingBottom,
    paddingTop: props.paddingTop,
    backgroundImage: props.pattern ? `url(${PATTERNT})` : "",
    backgroundSize: props.pattern ? "5%" : ""
  };

  return (
    <div className={` ${sectionClassName} ${props.visibility ? props.visibility : ""}`} style={style}>
      {props.pattern && <div className={styles[props.pattern ? "module-section__pattern" : ""]} />}
      {props.backgroundImage && (
        <div className={styles[props.backgroundImage ? "module-section__background" : ""]}>
          <ImageComponent src={props.backgroundImage} />
        </div>
      )}
      <div className={styles["module-section__foreground"]}>
        <div className="uk-container">
          {props.title && (
            <h2 className={styles["module-section__title"]} style={{ color: props.titleColor }}>
              {props.title}
            </h2>
          )}
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export { ModuleSectionComponent };
