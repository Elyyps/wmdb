import * as React from "react";
import styles from "./category-overview-component.module.scss";
import { CategoryCard } from "@app/core/category-card";
import {
  ICategoryOverviewModule,
  ICategoryCardModel
} from "@app/api/modules/category-overview/category-overview.model";
import { ModuleSectionComponent } from "@app/core/module-section";
import { withRouter, RouteComponentProps } from "react-router";

export interface ICategoryOverviewComponentProps {
  categoryOverviewModule: ICategoryOverviewModule;
}

const Component = (props: ICategoryOverviewComponentProps & RouteComponentProps) => {
  const { title, items, backgroundColor } = props.categoryOverviewModule;

  const openOverviewPage = (categoryCard: ICategoryCardModel) => {
    if (categoryCard.filterSectionId !== undefined) {
      let finalUrl = "/overzicht";

      // tslint:disable
      const foundSection = props.categoryOverviewModule.filterSections.find(
        section => section.id == categoryCard.filterSectionId
      );
      // tslint:enable
      if (foundSection) {
        const selectedItemsArrayString = foundSection.checkboxes.map(checkbox => checkbox.id).join("%2C");
        finalUrl = finalUrl.concat(`?categories=${selectedItemsArrayString}`);
      }

      props.history.push(finalUrl);
    } else {
      if (categoryCard.link) {
        props.history.push(categoryCard.link);
      }
    }
  };

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
                    onClick={() => {
                      openOverviewPage(item);
                    }}
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

const CategoryOverviewComponent = withRouter(Component);

export { CategoryOverviewComponent };
