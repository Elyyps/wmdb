import * as React from "react";
import styles from "./nav-bar-component.module.scss";
import { LogoComponent } from "@app/prep/modules-prep/core";
import { LinkComponent } from "@app/core/link";
import { HamburgerMenuComponent } from "@app/prep/modules-prep/hamburger-menu";
import MENU_ICON from "@assets/icons/menu.svg";
import { NavBarModalComponent } from "@app/core/nav-bar-modal";

export interface INavBarComponentProps {}

const NavBarComponent = (props: INavBarComponentProps) => (
  <div className={styles["nav-bar"]}>
    <div className="uk-container">
      <div className={styles["nav-bar__holder"]}>
        <div>
          <LogoComponent />
        </div>

        <div>
          <ul className={`${styles["nav-bar__links"]} uk-visible@m`}>
            <li>
              <LinkComponent to={"#"}>Helpdesk</LinkComponent>
            </li>
            <li>
              <LinkComponent to={"#"}>Nieuwsbrief</LinkComponent>
            </li>
            <li>
              <LinkComponent to={"#"}>Mijn uitjes</LinkComponent>
            </li>
          </ul>
          <NavBarModalComponent
            className={`${styles["nav-bar-modal__toggle"]}`}
            title={"Menu"}
            close={"Sluiten"}
            icon={MENU_ICON}
            iconSize="20px"
          >
            <HamburgerMenuComponent />
          </NavBarModalComponent>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
