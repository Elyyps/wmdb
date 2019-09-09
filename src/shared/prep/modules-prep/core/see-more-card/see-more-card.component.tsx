import * as React from "react";
import { Link } from "react-router-dom";
import "./see-more-card.component.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import Arrow from "@assets/icons/chevron-down.svg";

interface ISeeMoreCardProps {
  link: string;
  title?: string;
}

const SeeMoreCard = ({ link, title }: ISeeMoreCardProps) => (
  <Link to={link} className="see-more-card">
    <div className="see-more-card__title">{title}</div>
    <div className="see-more-card__arrow">
      <IconComponent icon={Arrow} size={"14px"} stroke />
    </div>
  </Link>
);

export { SeeMoreCard };
