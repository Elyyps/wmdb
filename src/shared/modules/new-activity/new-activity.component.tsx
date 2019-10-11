import * as React from "react";
import styles from "./new-activity-component.module.scss";
import { OutingCardComponent } from "@app/core/outing-card";
import { INewActivityModule } from "@app/api/modules/new-activity/new-activity";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface INewActivityComponentProps {
  newActivityModule: INewActivityModule;
}

const NewActivityComponent = ({ newActivityModule }: INewActivityComponentProps) => (
  <div className={styles["new-activity"]}>
    <ModuleSectionComponent title={newActivityModule.title} paddingTop={"40px"} paddingBottom={"40px"}>
      <div className={`${styles["new-activity__columns"]} uk-grid uk-child-width-1-2@m `}>
        {newActivityModule.cards.map((card, key) => (
          <div key={key}>
            <OutingCardComponent modify={"small"} {...card} />
          </div>
        ))}
      </div>
    </ModuleSectionComponent>
  </div>
);

export { NewActivityComponent };
