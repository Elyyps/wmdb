import * as React from "react";
import styles from "./category-card-component.module.scss";
import Arrow from "@assets/icons/chevron-down.svg";
import { IconComponent } from "../icon";
import { ImageComponent } from "../image";

interface ICategoryCardProps {
  count?: number;
  icon?: string;
  image?: string;
  link?: string;
  onClick: () => void;
  title?: string;
}

const CategoryCard = ({ onClick, title, count, image, icon }: ICategoryCardProps) => (
  <div role="button" onClick={onClick} className={styles["category-card"]}>
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
        <IconComponent icon={Arrow} size={"12px"} fillColor="#34aadf" />
      </div>
    </div>

    {image && (
      <div className={`${styles["category-card__image"]} uk-visible@s`}>
        <ImageComponent src={image} />
      </div>
    )}
  </div>
);

export { CategoryCard };
