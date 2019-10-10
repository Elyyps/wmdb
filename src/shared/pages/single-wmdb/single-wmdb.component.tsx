import React, { useState } from "react";

import { FooterComponent, NavBarComponent, HeaderGalleryComponent } from "@app/prep/modules-prep";
import {
  SingleWmdbForm,
  SingleWmdbContent,
  SingleWmdbModal,
  SingleWmdbContact
} from "@app/prep/pages-prep/single-wmdb/components";
import { Breadcrumbs, Button, Advertise, IconComponent, CardEventContainer } from "@app/prep/modules-prep/core";
import { BreadcrumbsData } from "@app/prep/pages-prep/single-wmdb/dummy-data";
import LOCATION from "@assets/icons/location.svg";
import PATTERNT from "@assets/pattern/pattern-wmdb.png";
import Arrow from "@assets/icons/chevron-right.svg";
import ArrowLeft from "@assets/icons/chevron-left.svg";
import ROOMS from "@assets/icons/rooms.svg";
import Image from "@assets/img-big.jpg";
import classNames from "classnames";
import { SingleWmdbData } from "@app/prep/pages-prep/single-wmdb/components/single-wmdb-data";
import { Link } from "react-router-dom";

export interface ISingleWmdbComponentProps {}

const SingleWmdbPageComponent = (props: ISingleWmdbComponentProps) => (
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
