import * as React from "react";
import "./breadcrumbs.component.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "../icon";
import ArrowRiht from "@assets/icons/chevron-right.svg";

export interface IBreadcrumbsProps {
  breadcrumbs: any;
}

const Breadcrumbs = ({ breadcrumbs }: IBreadcrumbsProps) => (
  <React.Fragment>
    <div className="uk-container">
      <ul className="breadcrumbs">
        {breadcrumbs
          ? Object.keys(breadcrumbs).map((item: any, key: number) =>
              breadcrumbs && breadcrumbs[item].link ? (
                <li key={key}>
                  <Link to={breadcrumbs[item].link}>
                    <span>{breadcrumbs[item].title}</span>
                    <IconComponent icon={ArrowRiht} size={"8px"} />
                  </Link>
                </li>
              ) : (
                <li key={key}>
                  <span>{breadcrumbs[item].title}</span>
                </li>
              )
            )
          : ""}
      </ul>
    </div>
  </React.Fragment>
);

export { Breadcrumbs };
