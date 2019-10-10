import * as React from "react";
import styles from "./other-activities-component.module.scss";
import { EventCardComponent } from "@app/core/event-card";
import { Button } from "@app/prep/modules-prep/core";
import { IOtherActivities } from "@app/api/modules/other-activities/other-activities";
import { IEventCard } from "@app/api/core/event-card";

export interface IOtherActivitiesComponentProps {
  otherActivities: IOtherActivities;
}

const OtherActivitiesComponent = ({ otherActivities }: IOtherActivitiesComponentProps) => (
  <div className={styles["other-activities"]}>
    <div className={styles["other-activities-head"]}>
      <h2>{otherActivities.title}</h2>
    </div>
    <div className="uk-grid uk-child-width-1-2@s uk-grid-medium" data-uk-margin>
      {otherActivities.cards &&
        otherActivities.cards.map((item: IEventCard, key: number) => (
          <div key={key}>
            <EventCardComponent image={item.image} link={item.buttonText} title={item.title} />
          </div>
        ))}
    </div>
    <div className={styles["other-activities-action"]}>
      <Button title={otherActivities.button.title} href={otherActivities.button.url} />
    </div>
  </div>
);

export { OtherActivitiesComponent };
