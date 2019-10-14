import * as React from "react";
import classNames from "classnames";
import "./card-post.component.scss";
import { Link } from "react-router-dom";

import IconCalendar from "@assets/icons/calendar.svg";
import IconDown from "@assets/icons/chevron-down.svg";
import { IButtonProps, Button } from "@app/core/button";
import { IconComponent } from "@app/core/icon";
import { CardPostImage } from "./card-post-image";


interface ICardPostProps {
  button: IButtonProps;
  content?: any;
  data: {
    icon?: string;
    label: string;
  };
  date?: {
    end: string;
    start: string;
  };
  image?: any;
  modify?: string;
  subtitle?: string;
  title?: string;
}

const CardPost = ({ title, image, button, data, content, subtitle, date, modify }: ICardPostProps) => {
  const [isOpen, setIsOpened] = React.useState(false);
  const toggleOpened = () => {
    setIsOpened(!isOpen);
  };

  const styleOpen = isOpen ? "show" : "hide";
  const modifyCard = modify ? `card-post--${modify}` : "";

  const classModify = classNames("card-post", { "card-post--event": date }, modifyCard, styleOpen);

  return (
    <div className={classModify}>
      {image && <CardPostImage images={image} />}

      <div className="card-body">
        <div className="card-head">
          <div className="card-title">
            <h3>{button.href ? <Link to={button.href}>{title}</Link> : { title }}</h3>
          </div>
          <div className="card-subtitle">{subtitle}</div>
          {date ? (
            <div className="card-label uk-hidden@m">
              <IconComponent icon={IconCalendar} size={"16px"} />
              <span>
                {date.start} - {date.end}
              </span>
            </div>
          ) : null}
        </div>
        <div className="card-content">
          <p>{content}</p>
        </div>
        <div className="card-bottom">
          <div className="card-labels">
            {date ? (
              <div className="card-label uk-visible@m">
                <IconComponent icon={IconCalendar} size={"16px"} />
                <span>
                  {date.start} - {date.end}
                </span>
              </div>
            ) : null}
            <div className="card-label">
              <IconComponent icon={data.icon} size={"20px"} />
              <span>{data.label}</span>
            </div>
          </div>
          <div className="card-action">
            <Button title={button.title} href={button.href} />
          </div>
        </div>
      </div>

      <div className="card-panel">
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

export { CardPost };
