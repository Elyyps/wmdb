import * as React from "react";
import "./card-post.component.scss";
import { CardAdvertise, CardPost } from "@app/prep/modules-prep/core";
import { OutingCardComponent } from "@app/core/outing-card";

interface ICardContainerProps {
  Cards?: any;
}

const CardContainer = ({ Cards }: ICardContainerProps) => (
  <div className={"card-post-wrapper"}>
    {Cards &&
      Cards.map((card: any, key: number) =>
        card.variant ? <CardAdvertise key={key} {...card} /> : <OutingCardComponent key={key} {...card} />
      )}
  </div>
);

export { CardContainer };
