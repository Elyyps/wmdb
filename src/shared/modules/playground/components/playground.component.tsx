import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";

import style from "./playground-component.module.scss";

export interface IPlaygroundComponentProps {}

const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div>
    <div className={style["main"]}> Playground!! </div>
    <div> Test Items: </div>
    <div>
      {props.testItems.map((item, index) => (
        <table key={index}>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        </table>
      ))}
    </div>
  </div>
);

export { PlaygroundComponent };
