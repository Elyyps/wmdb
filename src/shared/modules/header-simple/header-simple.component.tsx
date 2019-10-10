import * as React from "react";
import "./header-simple-component.scss";
import Oasis from "@assets/oasis.jpg";
import { IHeaderSimpleModule } from "@app/api/modules/header-simple";

export interface IHeaderSimpleComponentProps {
  headerSimpleModule: IHeaderSimpleModule;
}

const HeaderSimpleComponent = (props: IHeaderSimpleComponentProps) => {
  const { picture, title } = props.headerSimpleModule;

  return (
    <div className="header-simple">
      <div className="header-simple__overlay" />
      <div className="header-simple__image">
        <img src={picture} alt="oasis image" />
      </div>
      <div className="uk-container">
        <div className="header-simple__title">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export { HeaderSimpleComponent };