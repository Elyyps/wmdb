import * as React from "react";
import styles from "./list-check-component.module.scss";

export interface IListCheckComponentProps {
  hideTopBorder?: boolean;
  labels: string[];
}

const ListCheckComponent = ({ labels, hideTopBorder }: IListCheckComponentProps) => (
  <ul style={hideTopBorder ? { borderTop: "none" } : {}} className={`${styles["list-check"]} uk-list-check`}>
    {labels.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export { ListCheckComponent };
