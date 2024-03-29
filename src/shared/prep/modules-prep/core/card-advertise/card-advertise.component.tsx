import * as React from "react";
import "./card-advertise.component.scss";
import ImageAdvertise from "@assets/advertise.png";
import { IButtonProps, Button } from "@app/core/button";

interface ICardAdvertiseProps {
  button: IButtonProps;
  image: string[];
  title?: string;
  variant: string;
}

const CardAdvertise = ({ title, image, button }: ICardAdvertiseProps) => (
  <div className="card-advertise uk-invert">
    <div className="card-image">
      <img src={image.length > 0 ? image[0] : ImageAdvertise} alt="ImageAdvertise" />
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
