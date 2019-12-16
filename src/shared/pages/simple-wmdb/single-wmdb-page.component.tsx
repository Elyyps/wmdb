/* tslint:disable */
import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { ContactComponent } from "@app/modules/contact";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { HeaderGalleryComponent } from "@app/modules/header-gallery";
import { generateContactData } from "@app/api/modules/contact/end-point";
import { generateHeaderGalleryData, generateGalleryData } from "@app/api/modules/header-gallery/end-point";
import { GalleryComponent } from "@app/modules/gallery";
import { ActivitiesComponent } from "@app/modules/activities";
import { generateActivitiesData } from "@app/api/modules/activities/end-point";

const SingleWMDBPage = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <NavBarComponent navbarModule={generateNavbarData()} />
      <HeaderGalleryComponent headerGallery={generateGalleryData()} />
      <GalleryComponent headerGallery={generateGalleryData()} />
      <ContactComponent contactModule={generateContactData()} />
      <div style={{ position: "relative", bottom: "0" }}>
        <FooterComponent footerModule={generateFooterData()} />
      </div>
    </div>
  );
};
export { SingleWMDBPage };
