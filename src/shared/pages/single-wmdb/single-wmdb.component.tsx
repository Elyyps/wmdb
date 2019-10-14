import React from "react";

import { FooterComponent, NavBarComponent, HeaderGalleryComponent } from "@app/prep/modules-prep";

import ArrowLeft from "@assets/icons/chevron-left.svg";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@app/core/breadcrumb";
import { IconComponent } from "@app/core/icon";
import { ILink } from "@app/api/core/link";

export interface ISingleWmdbComponentProps {}

const BreadcrumbsData: ILink[] = [
  {
    title: "Home",
    url: "#"
  },
  {
    title: "Citygames in Amsterdam",
    url: "#"
  },
  {
    title: "Wie is de mol?",
    url: ""
  }
];

const SingleWmdbPageComponent = () => (
  <div className={"single-wmdb"}>
    <NavBarComponent />
    <div className="uk-visible@m">
      <Breadcrumb breadcrumbs={BreadcrumbsData} />
    </div>
    <div className="uk-container">
      <div className="uk-hidden@m">
        <Link to={"#"} className={"single-wmdb-back"}>
          <IconComponent strokeColor="black" icon={ArrowLeft} size={"12px"} />
          Terug
        </Link>
      </div>
    </div>
    <HeaderGalleryComponent />

    <FooterComponent />
  </div>
);

export { SingleWmdbPageComponent };
