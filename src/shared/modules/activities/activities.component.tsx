import * as React from "react";
import styles from "./activities-component.module.scss";
import { IActivitiesModule } from "@app/api/modules/activities/activities";
import { IActivityCard } from "@app/api/core/activity-card";
import { ActivityCardComponent } from "@app/core/activity-card";
import { RouteComponentProps, withRouter } from "react-router";

export interface IActivitiesComponentProps {
  activitiesModule: IActivitiesModule;
}

const Component = (props: IActivitiesComponentProps & RouteComponentProps) => {
  const openOverviewPage = (activitiesModule: IActivityCard) => {
    let finalUrl = "/overzicht";

    const foundSection = props.activitiesModule.filterSections.find(
      section => section.id === activitiesModule.filterSectionId
    );

    if (foundSection) {
      const selectedItemsArrayString = foundSection.checkboxes.map(checkbox => checkbox.id).join("%2C");
      finalUrl = finalUrl.concat(`?categories=${selectedItemsArrayString}`);
    }

    props.history.push(finalUrl);
  };

  return (
    <div className={styles["activities"]}>
      <h1>{props.activitiesModule.title}</h1>
      {props.activitiesModule.items.map((item: IActivityCard, key) => (
        <div key={key} style={{ height: "58px" }} role="button" onClick={() => openOverviewPage(item)}>
          <ActivityCardComponent {...item} key={key} />
        </div>
      ))}
    </div>
  );
};
const ActivitiesComponent = withRouter(Component);
export { ActivitiesComponent };
