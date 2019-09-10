import * as React from "react";
import "./card-event.component.scss";
import { Button, IButtonProps } from "@app/prep/modules-prep/core";
import { CardEvent } from "./index";

interface ICardEventContainerProps {
  button: IButtonProps;
  cards?: any;
  image?: any;
  title?: string;
}

const CardEventContainer = ({ cards, button, title, image }: ICardEventContainerProps) => (
  <div className={"cards-event-container"}>
    <div className="cards-event-head">
      <h2>{title}</h2>
    </div>
    <div className="uk-grid uk-child-width-1-2@s uk-grid-medium" data-uk-margin>
      {cards ? cards.map((item: any, key: number) => <CardEvent key={key} {...item} />) : ""}
    </div>
    <div className="cards-event-action">
      <Button {...button} />
    </div>
  </div>
);

export { CardEventContainer };
