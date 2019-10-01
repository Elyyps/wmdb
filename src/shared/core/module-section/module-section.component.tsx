import * as React from "react";
import styles from "./module-section-component.module.scss";
import classNames from "classnames";
import { ImageComponent } from "../image";

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
}

const ModuleSectionComponent = (props: IModuleSectionComponentProps) => {
  const sectionClassName = classNames("section", {
    [`section--pattern`]: props.pattern,
    [`section--${props.align}`]: props.align,
    [`section--${props.size}`]: props.size
  });

  const style = {
    backgroundColor: props.backgroundColor,
    paddingBottom: props.paddingBottom,
    paddingTop: props.paddingTop
  };

  return (
    <div className={sectionClassName} style={style}>
      {props.backgroundImage && (
        <div className={styles["module-section__background"]}>
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
