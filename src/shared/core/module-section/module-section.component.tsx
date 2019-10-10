import * as React from "react";
import styles from "./module-section-component.module.scss";
import classNames from "classnames";

export interface IModuleSectionComponentProps {
  align?: string;
  backgroundColor?: string;
  children?: any;
  paddingBottom?: string;
  paddingTop?: string;
  pattern?: boolean;
  size?: string;
  title?: string;
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
      <div className="uk-container">
        {props.title && <h2 className={styles["module-section__title"]}>{props.title}</h2>}
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export { ModuleSectionComponent };
