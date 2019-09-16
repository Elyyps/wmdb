import * as React from "react";
import "./hamburger-menu.component.scss";
import { Link } from "react-router-dom";

export interface IHamburgerMenuComponentProps {}

const HamburgerMenuComponent = (props: IHamburgerMenuComponentProps) => (
  <div className="hamburger-menu">
    <ul className="hamburger-menu__navigation">
      <li>
        <Link to="./">Lorem</Link>
      </li>
      <li>
        <Link to="./">Lorem</Link>
      </li>
      <li>
        <Link to="./">Lorem</Link>
      </li>
    </ul>
  </div>
);

export { HamburgerMenuComponent };
