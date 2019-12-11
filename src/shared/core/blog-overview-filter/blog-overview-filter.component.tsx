import * as React from "react";
import styles from "./blog-overview-filter-component.module.scss";
import { IBlogOverviewFilter } from "@app/api/modules/blog-overview/blog-overview";
import { ModuleSectionComponent } from "../module-section";
import { IconComponent } from "../icon";

export interface IBlogOverviewFilterComponentProps {
  options: IBlogOverviewFilter[];
  title: string;
}

const BlogOverviewFilterComponent = ({ title, options }: IBlogOverviewFilterComponentProps) => (
  <ModuleSectionComponent paddingTop="40px" paddingBottom="40px" align="center" size="small">
    <div className={styles["blog-overview-filter"]}>
      <h1>{title}</h1>
      <div className={styles["blog-overview-filter-body"]}>
        <h4> Filters:</h4>
        <ul className={styles["blog-overview-filter-list"]}>
          {options.map((option, key) => (
            <li key={key} role="button" onClick={() => alert("clicked")}>
              <IconComponent icon={option.icon} size={"25px"} />
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </ModuleSectionComponent>
);

export { BlogOverviewFilterComponent };
