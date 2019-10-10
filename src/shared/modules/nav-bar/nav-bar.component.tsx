import * as React from "react";
import styles from "./nav-bar-component.module.scss";
import { LogoComponent } from "@app/prep/modules-prep/core";
import { LinkComponent } from "@app/core/link";
import MENU_ICON from "@assets/icons/menu.svg";
import { INavBarModule } from "@app/api/modules/nav-bar/nav-bar.module";
import { NavBarModalComponent } from "../nav-bar-modal";
import { HamburgerMenuComponent } from "@app/core/hamburger-menu";

export interface INavBarComponentProps {
  navbarModule: INavBarModule;
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
            {props.navbarModule.links.map((link, key) => (
              <li key={key}>
                <LinkComponent to={link.url}>{link.title}</LinkComponent>
              </li>
            ))}
          </ul>
          <NavBarModalComponent
            title={props.navbarModule.title}
            close={props.navbarModule.closeText}
            icon={MENU_ICON}
            iconSize="20px"
          >
            <HamburgerMenuComponent menuItems={props.navbarModule.menuItems} />
          </NavBarModalComponent>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
