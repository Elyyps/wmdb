import * as React from "react";
import styles from "./outing-card-component.module.scss";
import { IconComponent } from "../icon";
import { LinkComponent } from "../link";
import { OutingCardImage } from "./outing-card-image.component";
import { IButtonProps, Button } from "@app/prep/modules-prep/core";
import IconCalendar from "@assets/icons/calendar.svg";
import classNames from "classnames";
import IconDown from "@assets/icons/chevron-down.svg";
import { IButton } from "@app/api/core/button";

export interface IOutingCardComponentProps {
  button: IButton;
  categoriesId?: number[];
  content: string;
  dataIcon?: string;
  date?: {
    end: string;
    start: string;
  };
  image?: string[];
  maximumPersons: number;
  minimumPersons: number;
  modify?: string;
  subtitle: string;
  title: string;
  variant?: string;
}

const OutingCardComponent = ({
  title,
  image,
  button,
  dataIcon,
  minimumPersons,
  maximumPersons,
  content,
  subtitle,
  date,
  modify
}: IOutingCardComponentProps) => {
  const [isOpen, setIsOpened] = React.useState(false);
  const toggleOpened = () => {
    setIsOpened(!isOpen);
  };

  const styleOpen = isOpen ? "show" : "hide";
  const modifyCard = modify ? `${styles["outing-card--"]}${modify}` : "";

  const classModify = classNames(styles["outing-card"], { "outing-card--event": date }, modifyCard, styleOpen);

  return (
    <div className={classModify}>
      {image && <OutingCardImage images={image} />}

      <div className={styles["card-body"]}>
        <div className={styles["card-head"]}>
          <div className={styles["card-title"]}>
            <h3>{button.href ? <LinkComponent to={button.href}>{title}</LinkComponent> : { title }}</h3>
          </div>
          <div className={styles["card-subtitle"]}>{subtitle}</div>
          {date ? (
            <div className={`${styles["card-label"]} ${"uk-hidden@m"}`}>
              <IconComponent icon={IconCalendar} size={"16px"} />
              <span>
                {date.start} - {date.end}
              </span>
            </div>
          ) : null}
        </div>
        <div className={`${styles["card-content"]} ${"uk-visible@s"}`}>
          <p>{content}</p>
        </div>
        <div className={` ${styles["card-bottom"]} ${"uk-visible@s"}`}>
          <div className={styles["card-labels"]}>
            {date && (
              <div className={`${styles["card-label"]} ${"uk-visible@m"}`}>
                <IconComponent icon={IconCalendar} size={"16px"} />
                <span>
                  {date.start} - {date.end}
                </span>
              </div>
            )}
            <div className={styles["card-label"]}>
              <IconComponent icon={dataIcon} size={"20px"} />
              <span>{`${minimumPersons} - ${maximumPersons} personen`}</span>
            </div>
          </div>
          <div className={styles["card-action"]}>
            <Button title={button.title} href={button.href} />
          </div>
        </div>
      </div>

      <div className={styles["card-panel"]}>
        <Button
          title={isOpen ? "Less" : "Meer"}
          onClick={() => {
            toggleOpened();
          }}
          icon={IconDown}
          position={"left"}
        />
      </div>
    </div>
  );
};
export { OutingCardComponent };
