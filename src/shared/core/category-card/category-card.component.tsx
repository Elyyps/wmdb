import * as React from "react";
import styles from "./category-card-component.module.scss";
import { ImageComponent } from "../image";
import { ActivityCardComponent } from "../activity-card";

interface ICategoryCardProps {
  color?: string;
  count?: number;
  icon?: string;
  image: string;
  link?: string;
  onClick: () => void;
  title: string;
}

const CategoryCardComponent = ({ onClick, title, count, image, icon, color,link }: ICategoryCardProps) => (
  <a style={{textDecoration:"none"}} href={link ? link : ""}>

  <div role="button" onClick={()=>link ? "" :onClick()} className={styles["category-card"]}>
    <div style={{ height: "83px" }}>
      <ActivityCardComponent title={title} total={count ? count : 0} color={color} icon={icon} />
    </div>

    {image && (
      <div className={`${styles["category-card__image"]} uk-visible@s`}>
        <ImageComponent src={image} />
      </div>
    )}
  </div> 
   </a>
);

export { CategoryCardComponent };
