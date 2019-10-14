import * as React from "react";
import styles from "./faq-overview.component.module.scss";

import { ArrowPanelListComponent } from "@app/core/arrow-panel-list";
import { IFaqOverviewModule } from "@app/api/modules/faq-overview";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface IFAQOverviewComponentProps {
  faqOverviewModule: IFaqOverviewModule;
}

const FAQOverviewComponent = (props: IFAQOverviewComponentProps) => {
  const { title, items } = props.faqOverviewModule;

  return (
    <div className={styles["faq-overview"]}>
      <ModuleSectionComponent title={title} paddingBottom={"42px"} paddingTop="72px" backgroundColor={"#e8f2fc"}>
        <div className={`${styles["faq-overview__posts"]} uk-grid uk-child-width-1-2@s`}>
          {items.map((row, key) => (
            <ArrowPanelListComponent
              key={key}
              title={row.title}
              items={row.items}
              linkMore={row.linkMore}
              icon={row.icon}
            />
          ))}
        </div>
      </ModuleSectionComponent>
    </div>
  );
};

export { FAQOverviewComponent };
