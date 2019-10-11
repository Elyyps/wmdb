import * as React from "react";
import styles from "./faq-overview.component.module.scss";
import { Section } from "@app/prep/modules-prep/core";
import { ArrowPanelListComponent } from "@app/core/arrow-panel-list";
import { IFaqOverviewModule } from "@app/api/modules/faq-overview";

export interface IFAQOverviewComponentProps {
  faqOverviewModule: IFaqOverviewModule;
}

const FAQOverviewComponent = (props: IFAQOverviewComponentProps) => {
  const { title, items } = props.faqOverviewModule;

  return (
    <div className={styles["faq-overview"]}>
      <Section title={title} paddingBottom={"42px"} paddingTop="72px" backgroundColor={"#e8f2fc"}>
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
      </Section>
    </div>
  );
};

export { FAQOverviewComponent };
