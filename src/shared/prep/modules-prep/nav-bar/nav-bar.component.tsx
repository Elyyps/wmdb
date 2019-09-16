import * as React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.component.scss";
import { LogoComponent } from "@app/prep/modules-prep/core";
import { ModalNavBar } from "@app/prep/modules-prep/core/modal-navbar";
import { HamburgerMenuComponent } from "@app/prep/modules-prep/hamburger-menu";
import MENU_ICON from "@assets/icons/menu.svg";

export interface INavBarComponentProps {}

const NavBarComponent = (props: INavBarComponentProps) => (
  <div className="nav-bar">
    <div className="uk-container">
      <div className="nav-bar__holder">
        <div>
          <LogoComponent />
        </div>

        <div>
          <ul className="nav-bar__links uk-visible@m">
            <li>
              <Link to={"#"}>Helpdesk</Link>
            </li>
            <li>
              <Link to={"#"}>Nieuwsbrief</Link>
            </li>
            <li>
              <Link to={"#"}>Mijn uitjes</Link>
            </li>
          </ul>

          <ModalNavBar
            className={"modal-menu nav-bar__toggle"}
            title={"Menu"}
            close={"Sluiten"}
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
