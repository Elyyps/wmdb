import * as React from "react";
import "./header-simple-component.scss";
import Oasis from "@assets/oasis.jpg";

export interface IHeaderSimpleComponentProps {
  title: string;
}

const HeaderSimpleComponent = (props: IHeaderSimpleComponentProps) => (
  <div className="header-simple">
    <div className="header-simple__overlay" />
    <div className="header-simple__image">
      <img src={Oasis} alt="oasis image" />
    </div>
    <div className="uk-container">
      <div className="header-simple__title">
        <h1>{props.title}</h1>
      </div>
    </div>
  </div>
);

export { HeaderSimpleComponent };
