import * as React from "react";
import styles from "./company-outing-card-component.module.scss";
import { ImageComponent } from "../image";
import Arrow from "@assets/icons/chevron-right.svg";
import { ILink } from "@app/api/core/link";
import { Button } from "../button";
import { trimText } from "@app/util/trim-text";

export interface ICompanyOutingCardComponentProps {
  button?: ILink;
  content?: string;
  data?: string;
  image?: string;
  title?: string;
}

const CompanyOutingCardComponent = ({ title, image, button, data, content }: ICompanyOutingCardComponentProps) => {
  const textWidth = 250;

  return (
    <div className={styles["company-outing-card"]}>
      <div className={` ${styles["company-outing-card__head"]} uk-visible@s `}>
        <div className={styles["company-outing-card__date"]}>{data}</div>
      </div>
      <div className={styles["company-outing-card__image"]}>
        <ImageComponent src={image} />
      </div>
      <div className={styles["company-outing-card__body"]}>
        <div className={` ${styles["company-outing-card__time"]} uk-hidden@s`}>
          <span>{data}</span>
        </div>
        <h4>{title}</h4>
        <div className={` ${styles["company-outing-card__content"]} uk-visible@s`}>
          {content && trimText(content, textWidth)}
        </div>
        <div className={styles["company-outing-card__bottom"]}>
          {button && <Button icon={Arrow} title={button.title} href={button.url} position={"left"} fullWidth />}
        </div>
      </div>
    </div>
  );
};

export { CompanyOutingCardComponent };
