import * as React from "react";
import { Link } from "react-router-dom";
import "./category-card.component.scss";
import { IconComponent, ImageComponent } from "@app/prep/modules-prep/core";
import Arrow from "@assets/icons/chevron-down.svg";

interface ICategoryCardProps {
  count?: number;
  image?: string;
  link: string;
  title?: string;
}

const CategoryCard = ({ link, title, count, image }: ICategoryCardProps) => (
  <Link to={link} className="category-card">
    <div className="category-card__head">
      <h3 className="category-card__title">
        {title}
        {count && <span>({count})</span>}
      </h3>
      <div className="category-card__arrow">
        <IconComponent icon={Arrow} size={"12px"} />
      </div>
    </div>

    {image && (
      <div className="category-card__image uk-visible@s">
        <ImageComponent src={image} />
      </div>
    )}
  </Link>
);

export { CategoryCard };
