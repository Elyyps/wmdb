import * as React from "react";
import styles from "./breadcrumb-component.module.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "../icon";
import ArrowRight from "@assets/icons/chevron-right.svg";
import { ILink } from "@app/api/core/link";

export interface IBreadcrumbProps {
  breadcrumbs: ILink[];
}

const Breadcrumb = ({ breadcrumbs }: IBreadcrumbProps) => (
  <React.Fragment>
    <ul className={styles["breadcrumb"]}>
      {breadcrumbs.map((item: ILink, key: number) =>
        item.url ? (
          <li key={key}>
            <Link to={item.url}>
              <span>{item.title}</span>
              <IconComponent icon={ArrowRight} size={"8px"} />
            </Link>
          </li>
        ) : (
          <li key={key}>
            <span>{item.title}</span>
          </li>
        )
      )}
    </ul>
  </React.Fragment>
);

export { Breadcrumb };
