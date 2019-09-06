import * as React from "react";
import "./blog-card.component.scss";
import { ImageComponent, Button } from "@app/prep/modules-prep/core";
import Arrow from "@assets/icons/chevron-right.svg";

interface IBlogCardProps {
  button?: any;
  content?: any;
  data?: string;
  image?: string;
  title?: string;
}

const BlogCard = ({ title, image, button, data, content }: IBlogCardProps) => (
  <div className="blog-card">
    <div className="blog-card__date">{data}</div>
    <div className="blog-card__image">
      <ImageComponent src={image} />
    </div>
    <h4 className="blog-card__title">{title}</h4>
    <div className="blog-card__content">{content}</div>
    <Button icon={Arrow} {...button} position={"left"} />
  </div>
);

export { BlogCard };
