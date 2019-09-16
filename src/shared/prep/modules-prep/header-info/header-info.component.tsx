import * as React from "react";
import "./header-info-component.scss";

export interface IHeaderInfoComponentProps {
  content?: string;
  image?: string;
  title: string;
}

const HeaderInfoComponent = (props: IHeaderInfoComponentProps) => (
  <div className="header-info">
    <div className="uk-container">
      <div className="header-info__holder">
        <div className="header-info__body">
          <h1>{props.title}</h1>
          {props.content}
        </div>
        {props.image && (
          <div className="header-info__image">
            <img src={props.image} alt="image" />
          </div>
        )}
      </div>
    </div>
  </div>
);

export { HeaderInfoComponent };
