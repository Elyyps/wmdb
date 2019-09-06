import * as React from "react";
import "./featured-posts.component.scss";
import { ImageComponent, Button, BlogCard } from "@app/prep/modules-prep/core";

export interface IFeaturedPostsComponentProps {
  button?: any;
  image?: string;
  items?: any[];
  title?: string;
}

const FeaturedPostsComponent = (props: IFeaturedPostsComponentProps) => {
  const { title, items, image, button } = props;

  return (
    <div className="featured-posts uk-visible@s">
      <div className="featured-posts__background">
        <ImageComponent src={image} />
      </div>
      <div className="featured-posts__foreground">
        <div className="uk-container">
          <h2 className="featured-posts__title">{title}</h2>
          {items && (
            <div className="featured-posts__list uk-grid uk-child-width-1-3@s">
              {items.map((item, key) => (
                <div key={key}>
                  <BlogCard {...item} />
                </div>
              ))}
            </div>
          )}
          <div className="featured-posts__actions">
            <Button {...button} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeaturedPostsComponent };
