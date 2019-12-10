import * as React from "react";
import styles from "./questions-overview-component.module.scss";
import { IQuestionsOverview } from "@app/api/modules/questions-overview/questions-overview";
import { Breadcrumb } from "@app/core/breadcrumb";
import { ArrowPanelListComponent } from "@app/core/arrow-panel-list";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface IQuestionsOverviewComponentProps {
  questionOverview: IQuestionsOverview;
}

const QuestionsOverviewComponent = ({ questionOverview }: IQuestionsOverviewComponentProps) => (
  <div className={styles["questions-overview"]}>
    <div className="uk-container">
      <Breadcrumb breadcrumbs={questionOverview.path} />
      <div className={styles["questions-overview-header"]}>
        <h1>{questionOverview.title}</h1>
        <p>{questionOverview.content}</p>
      </div>
    </div>
    <div className={styles["questions-overview-body"]}>
      <ModuleSectionComponent paddingTop="40px">
        <ArrowPanelListComponent items={questionOverview.link} />
      </ModuleSectionComponent>
    </div>
  </div>
);

export { QuestionsOverviewComponent };
