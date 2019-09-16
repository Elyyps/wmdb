import * as React from "react";
import { Link } from "react-router-dom";
import "./category-card.component.scss";
import { IconComponent, ImageComponent } from "@app/prep/modules-prep/core";
import Arrow from "@assets/icons/chevron-down.svg";

interface ICategoryCardProps {
  count?: number;
  icon?: string;
  image?: string;
  link: string;
  title?: string;
}

const CategoryCard = ({ link, title, count, image, icon }: ICategoryCardProps) => (
  <Link to={link} className="category-card">
    <div className="category-card__head">
      <h3 className="category-card__title">
        <div>
          {icon && <IconComponent icon={icon} size={"34px"} />}
          {title}
        </div>
        {count && <span>({count})</span>}
      </h3>
      <div className="category-card__arrow">
        <IconComponent icon={Arrow} size={"12px"} stroke />
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
