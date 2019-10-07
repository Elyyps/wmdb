import * as React from "react";

export interface IListCheckComponentProps {
  labels: string[];
}

const ListCheckComponent = ({ labels }: IListCheckComponentProps) => (
  <ul className="uk-list-check">
    {labels.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export { ListCheckComponent };
