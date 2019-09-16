import * as React from "react";
import "./card-event.component.scss";
import { Link } from "react-router-dom";

interface ICardEventProps {
  image?: any;
  link: string;
  title?: string;
}

const CardEvent = ({ title, image, link }: ICardEventProps) => (
  <div className={"card-event"}>
    <div className="card-body">
      <div className="card-head">
        <Link to={link} className="card-image">
          <img src={image} alt="image" />
        </Link>
        <div className="card-title">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  </div>
);

export { CardEvent };
