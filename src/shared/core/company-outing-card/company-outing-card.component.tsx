import * as React from "react";
import styles from "./company-outing-card-component.module.scss";
import { IconComponent } from "../icon";
import { ImageComponent } from "../image";
import Arrow from "@assets/icons/chevron-right.svg";
import { Button } from "@app/prep/modules-prep/core";

export interface ICompanyOutingCardComponentProps {
  button?: any;
  content?: any;
  data?: string;
  icon?: string;
  image?: string;
  title?: string;
}

const CompanyOutingCardComponent = ({
  title,
  image,
  button,
  data,
  content,
  icon
}: ICompanyOutingCardComponentProps) => (
  <div className={styles["company-outing-card"]}>
    <div className="blog-card__head">
      <div className="blog-card__date">{data}</div>
      {icon && <IconComponent icon={icon} size="24px" fillColor={"#969696"} />}
    </div>
    <div className="blog-card__image">
      <ImageComponent src={image} />
    </div>
    <h4 className="blog-card__title">{title}</h4>
    <div className="blog-card__content">{content}</div>
    <Button icon={Arrow} {...button} position={"left"} />
  </div>
);

export { CompanyOutingCardComponent };
