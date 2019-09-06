import * as React from "react";
import "./nav-bar.component.scss";
import { Button, LogoComponent } from "@app/prep/modules-prep/core";
import { ModalNavBar } from "@app/prep/modules-prep/core/modal-navbar";
import { HamburgerMenuComponent } from "@app/prep/modules-prep/hamburger-menu";
import MENU_ICON from "@assets/icons/menu.svg";
import CalendarIcon from "@assets/icons/calendar.svg";

export interface INavBarComponentProps {}

const NavBarComponent = (props: INavBarComponentProps) => (
  <div className="nav-bar">
    <div className="uk-container">
      <div className="nav-bar__holder">
        <div>
          <LogoComponent />
        </div>

        <div>
          <Button href={"/agenda"} title={"Actuele agenda"} icon={CalendarIcon} position={"left"} />

          <ModalNavBar
            className={"modal-menu nav-bar__toggle"}
            title={"Menu"}
            close={"Sluiten"}
            icon={MENU_ICON}
            iconSize="17px"
          >
            <HamburgerMenuComponent />
          </ModalNavBar>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
