import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { ContactComponent } from "@app/modules/contact";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import Oasis from "@assets/oasis.jpg";
import Image from "@assets/img02.png";
import Rectangle from "@assets/rectangle.png";
import Big from "@assets/img-big.jpg";
import Grid from "@assets/img-grid.png";
import { HeaderGalleryComponent } from "@app/modules/header-gallery";

const imageList = [Rectangle, Oasis, Big, Image, Oasis, Grid];

const SingleWMDBPage = () => (
  <React.Fragment>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <HeaderGalleryComponent images={imageList} />
    <ContactComponent />
    <FooterComponent footerModule={generateFooterData()} />
  </React.Fragment>
);
export { SingleWMDBPage };
