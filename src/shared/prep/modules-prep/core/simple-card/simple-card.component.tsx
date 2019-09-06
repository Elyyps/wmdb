import * as React from "react";
import { Link } from "react-router-dom";
import "./simple-card.component.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import Arrow from "@assets/icons/chevron-down.svg";

interface ISimpleCardProps {
  link: string;
  title?: string;
}

const SimpleCard = ({ link, title }: ISimpleCardProps) => (
  <Link to={link} className="simple-card">
    <div className="simple-card__title">{title}</div>
    <div className="simple-card__arrow">
      <IconComponent icon={Arrow} size={"14px"} />
    </div>
  </Link>
);

export { SimpleCard };
