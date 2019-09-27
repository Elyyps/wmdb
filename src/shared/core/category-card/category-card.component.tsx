import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./category-card-component.module.scss";
import Arrow from "@assets/icons/chevron-down.svg";
import { IconComponent } from "../icon";
import { ImageComponent } from "../image";

interface ICategoryCardProps {
  count?: number;
  icon?: string;
  image?: string;
  link: string;
  title?: string;
}

const CategoryCard = ({ link, title, count, image, icon }: ICategoryCardProps) => (
  <Link to={link} className={styles["category-card"]}>
    <div className={styles["category-card__head"]}>
      <h3 className={styles["category-card__title"]}>
        <div>
          {icon && (
            <div className={styles["category-card__title__icon"]}>
              <IconComponent icon={icon} size={"34px"} />
            </div>
          )}
          {title}
        </div>
        {count && <span>({count})</span>}
      </h3>
      <div className={styles["category-card__arrow"]}>
        <IconComponent icon={Arrow} size={"12px"} stroke />
      </div>
    </div>

    {image && (
      <div className={`${styles["category-card__image"]} uk-visible@s`}>
        <ImageComponent src={image} />
      </div>
    )}
  </Link>
);

export { CategoryCard };
