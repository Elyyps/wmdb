import * as React from "react";
import styles from "./company-outing-component.module.scss";
import { ModuleSectionComponent } from "@app/core/module-section";
import { ICompanyOuting } from "@app/api/modules/company-outing/company-outing";
import Big from "@assets/img-big.jpg";
import { Button } from "@app/core/button";
import { CompanyOutingCardComponent } from "@app/core/company-outing-card";
export interface ICompanyOutingComponentProps {
  companyOuting: ICompanyOuting;
}

const CompanyOutingComponent = (props: ICompanyOutingComponentProps) => (
  <ModuleSectionComponent
    title={props.companyOuting.title}
    titleColor={"white"}
    backgroundImage={Big}
    paddingTop={"40px"}
    visibility={"uk-visible@s"}
  >
    <div className={` ${styles["company-outing"]} `}>
      <div className="uk-container">
        {props.companyOuting.cards && (
          <div className={` ${styles["company-outing__list"]} uk-grid uk-child-width-1-3@s `}>
            {props.companyOuting.cards.map((item, key) => (
              <div key={key}>
                <CompanyOutingCardComponent {...item} />
              </div>
            ))}
          </div>
        )}
        <div className={styles["company-outing__actions"]}>
          <Button title={props.companyOuting.button.title} href={props.companyOuting.button.url} />
        </div>
      </div>
    </div>
  </ModuleSectionComponent>
);

export { CompanyOutingComponent };
