import * as React from "react";
import "./pagination.component.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import { Link } from "react-router-dom";
import ArrowRight from "@assets/icons/chevron-right.svg";
import ArrowLeft from "@assets/icons/chevron-left.svg";

export interface IPaginationComponentProps {}

const PaginationComponent = (props: IPaginationComponentProps) => (
  <div className="pagination">
    <Link to="#" className="prev">
      <IconComponent icon={ArrowLeft} size={"13px"} stroke />
      <span className={"uk-visible@s"}>Vorige</span>
    </Link>
    <ul className="pagination-list">
      <li className={"active"}>
        <Link to="#">1</Link>
      </li>
      <li>
        <span>...</span>
      </li>
      <li>
        <Link to="#">3</Link>
      </li>
      <li>
        <Link to="#">4</Link>
      </li>
      <li>
        <Link to="#">5</Link>
      </li>
      <li>
        <span>...</span>
      </li>
      <li>
        <Link to="#">7</Link>
      </li>
    </ul>
    <Link to="#" className="next">
      <span className={"uk-visible@s"}>Volgende</span>
      <IconComponent icon={ArrowRight} size={"13px"} stroke />
    </Link>
  </div>
);

export { PaginationComponent };
