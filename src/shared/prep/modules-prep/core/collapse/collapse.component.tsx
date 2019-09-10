import React from "react";
import { CollapseItem } from "@app/prep/modules-prep/core";
import "./collapse-component.scss";

export interface ICollapseProps {
  items: any;
  modify?: string;
}

const Collapse = ({ items, modify }: ICollapseProps) => {
  const [openedPanel, setOpenedPanel] = React.useState<number | undefined>(-1);

  const panelClicked = (key?: number) => {
    if (openedPanel === key) {
      setOpenedPanel(-1);
    } else {
      setOpenedPanel(key);
    }
  };

  return (
    <div className={`collapse ${modify ? modify : ""}`}>
      {items.map((item: any, key: number) => (
        <CollapseItem
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

export { Collapse };
