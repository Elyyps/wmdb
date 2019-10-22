import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { ContactComponent } from "@app/modules/contact";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { HeaderGalleryComponent } from "@app/modules/header-gallery";
import { generateContactData } from "@app/api/modules/contact/end-point";
import { generateHeaderGalleryData } from "@app/api/modules/header-gallery/end-point";

const SingleWMDBPage = () => (
  <React.Fragment>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <HeaderGalleryComponent images={generateHeaderGalleryData()} />
    <ContactComponent contactModule={generateContactData()} />
    <FooterComponent footerModule={generateFooterData()} />
  </React.Fragment>
);
export { SingleWMDBPage };
