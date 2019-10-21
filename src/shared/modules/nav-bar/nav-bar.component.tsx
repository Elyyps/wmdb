import * as React from "react";
import styles from "./nav-bar-component.module.scss";
import { LogoComponent } from "@app/core/logo/logo.component";
import { LinkComponent } from "@app/core/link";
import MENU_ICON from "@assets/icons/menu.svg";
import { INavBarModule } from "@app/api/modules/nav-bar/nav-bar.module";
import { NavBarModalComponent } from "../nav-bar-modal";
import { HamburgerMenuComponent } from "@app/core/hamburger-menu";

export interface INavBarComponentProps {
  navbarModule: INavBarModule;
}

const NavBarComponent = ({ navbarModule }: INavBarComponentProps) => (
  <div className={styles["nav-bar"]}>
    <div className="uk-container">
      <div className={styles["nav-bar__holder"]}>
        <div>
          <LogoComponent logo={navbarModule.logo} />
        </div>
        <div>
          <ul className={`${styles["nav-bar__links"]} uk-visible@m`}>
            {navbarModule.links.map((link, key) => (
              <li key={key}>
                <LinkComponent to={link.url}>{link.title}</LinkComponent>
              </li>
            ))}
          </ul>
          <NavBarModalComponent
            title={navbarModule.title}
            close={navbarModule.closeText}
            icon={MENU_ICON}
            iconSize="22px"
          >
            <HamburgerMenuComponent menuItems={navbarModule.menuItems} />
          </NavBarModalComponent>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
