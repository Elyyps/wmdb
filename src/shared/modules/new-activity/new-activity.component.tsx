import * as React from "react";
import styles from "./new-activity-component.module.scss";
import { OutingCardComponent } from "@app/core/outing-card";
import { INewActivity } from "@app/api/modules/new-activity/new-activity";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface INewActivityComponentProps {
  newActivity: INewActivity;
}

const NewActivityComponent = (props: INewActivityComponentProps) => (
  <ModuleSectionComponent title={props.newActivity.title}>
    <div className={`${styles["new-activity__columns"]} uk-grid uk-child-width-1-2@m `}>
      {props.newActivity.cards.map((card, key) => (
        <div key={key}>
          <OutingCardComponent modify={"small"} {...card} />
        </div>
      ))}
    </div>
  </ModuleSectionComponent>
);

export { NewActivityComponent };
