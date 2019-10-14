import React from "react";

import { FooterComponent, NavBarComponent, HeaderGalleryComponent } from "@app/prep/modules-prep";
import { Breadcrumbs, IconComponent } from "@app/prep/modules-prep/core";
import { BreadcrumbsData } from "@app/prep/pages-prep/single-wmdb/dummy-data";
import ArrowLeft from "@assets/icons/chevron-left.svg";
import { Link } from "react-router-dom";

export interface ISingleWmdbComponentProps {}

const SingleWmdbPageComponent = () => (
  <div className={"single-wmdb"}>
    <NavBarComponent />
    <div className="uk-visible@m">
      <Breadcrumbs breadcrumbs={BreadcrumbsData} />
    </div>
    <div className="uk-container">
      <div className="uk-hidden@m">
        <Link to={"#"} className={"single-wmdb-back"}>
          <IconComponent stroke icon={ArrowLeft} size={"12px"} />
          Terug
        </Link>
      </div>
    </div>
    <HeaderGalleryComponent />

    <FooterComponent />
  </div>
);

export { SingleWmdbPageComponent };
