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
  const [windowSize, setWindowSize] = React.useState(0);
  const mobileSize = 640;
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  React.useEffect(() => {
    handleResize();
  }, [windowSize]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles["faq-overview"]}>
      <ModuleSectionComponent
        title={title}
        paddingTopMobile={props.faqOverviewModule.paddingTopMobile}
        paddingBottomMobile={props.faqOverviewModule.paddingBottomMobile}
        paddingBottom={props.faqOverviewModule.shouldMarginBottomBeZero ? "0px" : "32px"}
        paddingTop="72px"
        backgroundColor={"#e8f2fc"}
      >
        <div className={`${styles["faq-overview__posts"]} uk-grid uk-child-width-1-2@s`}>
          {items.slice(0, windowSize < mobileSize ? 1 : items.length).map((row, key) => (
            <ArrowPanelListComponent
              key={key}
              title={row.title}
              items={row.items}
              linkMore={row.linkMore}
              icon={row.icon}
              shouldMarginBottomBeZero={props.faqOverviewModule.shouldMarginBottomBeZero}
            />
          ))}
        </div>
      </ModuleSectionComponent>
    </div>
  );
};

export { FAQOverviewComponent };
