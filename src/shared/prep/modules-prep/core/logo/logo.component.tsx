import * as React from "react";
import { Link } from "react-router-dom";
import { ImageComponent } from "@app/core/image";
import "./logo.component.scss";
import Logo from "@assets/WMDB.svg";

export interface ILogoComponentProps {}

const LogoComponent = (props: ILogoComponentProps) => (
  <Link to="/" className="logo">
    <ImageComponent src={Logo} />
  </Link>
);

export { LogoComponent };
