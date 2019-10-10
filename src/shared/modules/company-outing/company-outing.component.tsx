import * as React from "react";
import styles from "./company-outing-component.module.scss";
import { ModuleSectionComponent } from "@app/core/module-section";
import { ICompanyOutingModule } from "@app/api/modules/company-outing/company-outing";
import Big from "@assets/img-big.jpg";
import { Button } from "@app/core/button";
import { CompanyOutingCardComponent } from "@app/core/company-outing-card";
export interface ICompanyOutingComponentProps {
  companyOutingModule: ICompanyOutingModule;
}

const CompanyOutingComponent = ({ companyOutingModule }: ICompanyOutingComponentProps) => (
  <ModuleSectionComponent
    title={companyOutingModule.title}
    titleColor={"black"}
    backgroundImage={Big}
    paddingTop={"40px"}
    paddingBottom={"40px"}
    visibility={"uk-visible@s"}
  >
    <div className={` ${styles["company-outing"]} `}>
      <div className="uk-container">
        {companyOutingModule.cards && (
          <div className={` ${styles["company-outing__list"]} uk-grid uk-child-width-1-3@s `}>
            {companyOutingModule.cards.map((item, key) => (
              <div key={key}>
                <CompanyOutingCardComponent {...item} />
              </div>
            ))}
          </div>
        )}
        <div className={styles["company-outing__actions"]}>
          <Button title={companyOutingModule.button.title} href={companyOutingModule.button.url} />
        </div>
      </div>
    </div>
  </ModuleSectionComponent>
);

export { CompanyOutingComponent };
