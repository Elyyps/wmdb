import * as React from "react";
import styles from "./arrow-panel-list-component.module.scss";
import { IconComponent } from "../icon";
import { ArrowPanel, IArrowPanelProps } from "../arrow-panel/arrow-panel.component";
import { SeeMorePanel } from "../see-more-panel";

import { ILink } from "@app/api/core/link";

export interface IArrowPanelListComponentProps {
  icon?: string;
  items: ILink[];
  linkMore?: IArrowPanelProps;
  title: string;
}

const ArrowPanelListComponent = (props: IArrowPanelListComponentProps) => {
  const { items, title, icon, linkMore } = props;

  return (
    <div className={styles["arrow-panel-list"]}>
      <div className={styles["arrow-panel-list__head"]}>
        {icon && (
          <div className={styles["arrow-panel-list__head__icon"]}>
            <IconComponent icon={icon} size="34px" />
          </div>
        )}
        {title && <h3>{title}</h3>}
      </div>
      {items &&
        items.map((item, key: number) => (
          <div key={key} className={styles["arrow-panel-list__item"]}>
            <ArrowPanel title={item.title} url={item.url} />
          </div>
        ))}
      {linkMore && (
        <div className={styles["arrow-panel-list__item"]}>
          <SeeMorePanel title={linkMore.title} link={linkMore.url} />
        </div>
      )}
    </div>
  );
};
export { ArrowPanelListComponent };
