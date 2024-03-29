import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { FooterComponent } from "@app/modules/footer";
import { generateDummyNavbarData } from "@app/api/modules/nav-bar/generate-dummy-data";
import { generateDummyFooterData } from "@app/api/modules/footer/generate-dummy-data";
import { QuestionsOverviewComponent } from "@app/modules/questions-overview";
import { generateQuestionsOverviewData } from "@app/api/modules/questions-overview/end-point";
import style from "../pages.module.scss";

export const QuestionsOverviewPage = () => (
  <div className={style["page"]}>
    <NavBarComponent navbarModule={generateDummyNavbarData()} />
    <QuestionsOverviewComponent questionOverview={generateQuestionsOverviewData()} />
    <div className={style["page-footer"]}>
      <FooterComponent footerModule={generateDummyFooterData()} />
    </div>
  </div>
);
