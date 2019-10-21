import * as React from "react";
import styles from "./category-overview-component.module.scss";
import { CategoryCard } from "@app/core/category-card";
import { ICategoryOverviewModule } from "@app/api/modules/category-overview/category-overview.model";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface ICategoryOverviewComponentProps {
  categoryOverviewModule: ICategoryOverviewModule;
}

const CategoryOverviewComponent = (props: ICategoryOverviewComponentProps) => {
  const { title, items, backgroundColor } = props.categoryOverviewModule;

  return (
    <ModuleSectionComponent backgroundColor={backgroundColor} paddingBottom="72px" paddingTop="72px">
      <div className={styles["category-overview"]}>
        <div className="uk-container">
          {title && <h2 className={styles["category-overview__title"]}>{title}</h2>}
          {items && (
            <div className={`${styles["category-overview__posts"]} uk-grid uk-child-width-1-2@s uk-child-width-1-3@m`}>
              {items.map((item, key) => (
                <div key={key}>
                  <CategoryCard
                    count={item.count}
                    icon={item.icon}
                    image={item.image}
                    link={item.link}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ModuleSectionComponent>
  );
};

export { CategoryOverviewComponent };
