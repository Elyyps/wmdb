import * as React from "react";
import styles from "./module-section-component.module.scss";
import classNames from "classnames";
import { ImageComponent } from "../image";

export interface IModuleSectionComponentProps {
  align?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  children?: any;
  paddingBottom?: "120px" | "72px" | "40px" | "32px" | "0px";
  paddingBottomMobile?: "120px" | "72px" | "40px" | "32px" | "0px";
  paddingTop?: "120px" | "72px" | "40px" | "32px" | "0px";
  paddingTopMobile?: "120px" | "72px" | "40px" | "32px" | "0px";
  pattern?: boolean;
  size?: string;
  title?: string;
  titleColor?: string;
  visibility?: string;
}

const ModuleSectionComponent = (props: IModuleSectionComponentProps) => {
  const sectionClassName = classNames(styles["module-section"], {
    [styles[`module-section--pattern`]]: props.pattern,
    [styles[`module-section--${props.align}`]]: props.align,
    [styles[`module-section-padding-top--${props.paddingTop}`]]: props.paddingTop,
    [styles[`module-section-padding-bottom--${props.paddingBottom}`]]: props.paddingBottom,
    [styles[`module-section-padding-top--${props.paddingTopMobile}-mobile`]]: props.paddingTopMobile,
    [styles[`module-section-padding-bottom--${props.paddingBottomMobile}-mobile`]]: props.paddingBottomMobile,
    [styles[`module-section--${props.size}`]]: props.size
  });

  const style = {
    backgroundColor: props.backgroundColor
  };

  return (
    <div className={` ${sectionClassName} ${props.visibility ? props.visibility : ""}`} style={style}>
    
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
