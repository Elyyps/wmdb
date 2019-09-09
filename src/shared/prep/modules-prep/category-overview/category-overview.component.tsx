import * as React from "react";
import "./category-overview.component.scss";
import { CategoryCard } from "@app/prep/modules-prep/core";

export interface ICategoryOverviewComponentProps {
  backgroundColor?: string;
  items?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  title?: string;
}

const CategoryOverviewComponent = (props: ICategoryOverviewComponentProps) => {
  const { title, items } = props;

  const styles = {
    backgroundColor: props.backgroundColor,
    paddingBottom: props.paddingBottom,
    paddingTop: props.paddingTop
  };

  return (
    <div className="category-overview" style={styles}>
      <div className="uk-container">
        {title && <h2 className="category-overview__title">{title}</h2>}

        {items && (
          <div className="category-overview__posts uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {items.map((item, key) => (
              <div key={key}>
                <CategoryCard {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { CategoryOverviewComponent };
