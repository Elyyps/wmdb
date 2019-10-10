import * as React from "react";
import styles from "./expendable-component.module.scss";
import { ExpendableItemComponent } from "./expendable-item.component";
import { IExpendableItem } from "@app/api/core/expendable-item";

export interface IExpendableComponentProps {
  items: IExpendableItem[];
  modify?: string;
}

const ExpendableComponent = (props: IExpendableComponentProps) => {
  const [openedPanel, setOpenedPanel] = React.useState<number | undefined>(-1);

  const panelClicked = (key?: number) => {
    if (openedPanel === key) {
      setOpenedPanel(-1);
    } else {
      setOpenedPanel(key);
    }
  };

  return (
    <div className={`${styles["expendable"]} ${props.modify ? styles[props.modify] : ""}`}>
      {props.items.map((item: IExpendableItem, key: number) => (
        <ExpendableItemComponent
          callback={panelClicked}
          identifier={key}
          opened={openedPanel === key}
          key={key}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export { ExpendableComponent };
