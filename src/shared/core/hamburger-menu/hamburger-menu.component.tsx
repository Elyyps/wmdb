import * as React from "react";
import styles from "./hamburger-menu-component.module.scss";
import { LinkComponent } from "../link";
import { ILink } from "@app/api/core/link/link";

export interface IHamburgerMenuComponentProps {
  menuItems: ILink[];
}

const HamburgerMenuComponent = (props: IHamburgerMenuComponentProps) => (
  <div className={styles["hamburger-menu"]}>
    <ul className={styles["hamburger-menu__navigation"]}>
      {props.menuItems.map((item, key) => (
        <li key={key}>
          <LinkComponent to={item.url}>{item.title}</LinkComponent>
        </li>
      ))}
    </ul>
  </div>
);

export { HamburgerMenuComponent };
