import * as React from "react";
import "./card-advertise.component.scss";
import ImageAdvertise from "@assets/advertise.png";
import { Button, IButtonProps } from "@app/prep/modules-prep/core";

interface ICardAdvertiseProps {
  button: IButtonProps;
  image?: string;
  title?: string;
  variant: string;
}

const CardAdvertise = ({ title, image, button }: ICardAdvertiseProps) => (
  <div className="card-advertise uk-invert">
    <div className="card-image">
      <img src={ImageAdvertise} alt="ImageAdvertise" />
    </div>
    <div className="card-body">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-action">
        <Button {...button} />
      </div>
    </div>
  </div>
);

export { CardAdvertise };
