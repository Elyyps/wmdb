import * as React from "react";
import styles from "./list-check-component.module.scss";

export interface IListCheckComponentProps {
  labels: string[];
}

const ListCheckComponent = ({ labels }: IListCheckComponentProps) => (
  <ul className={`${styles["list-check"]} uk-list-check`}>
    {labels.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export { ListCheckComponent };
