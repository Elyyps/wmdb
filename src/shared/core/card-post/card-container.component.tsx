import * as React from "react";
import { OutingCardComponent } from "@app/core/outing-card";
import { CardAdvertise } from "../card-advertise";

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
