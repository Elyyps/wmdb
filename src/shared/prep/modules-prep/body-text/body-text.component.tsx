import * as React from "react";

import styles from "./body-text-component.module.scss";

export interface IBodyTextComponentProps {
  bgcolor?: string;
  children: any;
  style?: object;
}

const BodyTextComponent = (props: IBodyTextComponentProps) => {
  const style = {
    backgroundColor: props.bgcolor,
    paddingTop: "72px",
    paddingBottom: "72px",
    ...props.style
  };

  return (
    <div className={styles["body-text"]} style={style}>
      <div className="uk-container">{props.children}</div>
    </div>
  );
};
export { BodyTextComponent };
