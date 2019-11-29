import * as React from "react";
import styles from "./activities-component.module.scss";
import { IActivitiesModule } from "@app/api/modules/activities/activities";
import { IActivityCard } from "@app/api/core/activity-card";
import { ActivityCardComponent } from "@app/core/activity-card";

export interface IActivitiesComponentProps {
  activitiesModule: IActivitiesModule;
}

const ActivitiesComponent = ({ activitiesModule }: IActivitiesComponentProps) => (
  <div className={styles["activities"]}>
    <h1>{activitiesModule.title}</h1>
    {activitiesModule.items.map((item: IActivityCard, key) => (
      <div key={key} style={{ height: "58px" }}>
        <ActivityCardComponent {...item} key={key} />
      </div>
    ))}
  </div>
);

export { ActivitiesComponent };
