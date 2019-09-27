import * as React from "react";
import styles from "./nav-bar-component.module.scss";
import { LogoComponent } from "@app/prep/modules-prep/core";
import { LinkComponent } from "@app/core/link";
import { HamburgerMenuComponent } from "@app/prep/modules-prep/hamburger-menu";
import MENU_ICON from "@assets/icons/menu.svg";
import { ModalNavBar } from "@app/prep/modules-prep/core/modal-navbar";
import { INavBarModule } from "@app/api/modules/nav-bar/nav-bar.module";

export interface INavBarComponentProps {
  navbar: INavBarModule;
}

const NavBarComponent = (props: INavBarComponentProps) => (
  <div className={styles["nav-bar"]}>
    <div className="uk-container">
      <div className={styles["nav-bar__holder"]}>
        <div>
          <LogoComponent />
        </div>

        <div>
          <ul className={`${styles["nav-bar__links"]} uk-visible@m`}>
            {props.navbar.links.map(link => (
              <li>
                <LinkComponent to={link.url}>{link.title}</LinkComponent>
              </li>
            ))}
          </ul>
          <ModalNavBar
            className={`${styles["nav-bar-modal__toggle"]}`}
            title={props.navbar.title}
            close={props.navbar.closeText}
            icon={MENU_ICON}
            iconSize="20px"
          >
            <HamburgerMenuComponent />
          </ModalNavBar>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
