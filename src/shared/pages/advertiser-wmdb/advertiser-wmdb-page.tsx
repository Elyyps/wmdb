import * as React from "react";
import { AdvertiserWMDBComponent } from "@app/modules/advertiser-wmdb";
import { generateAdvertiserData } from "@app/api/modules/advertiser-wmdb/end-point";
import { HeaderSimpleComponent } from "@app/modules/header-simple";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateDummyNavbarData } from "@app/api/modules/nav-bar/generate-dummy-data";
import { FooterComponent } from "@app/modules/footer";
import { generateDummyFooterData } from "@app/api/modules/footer/generate-dummy-data";
import { generateAdvertiserWMDBHeaderDummyData } from "@app/api/modules/header-simple";
import style from "../pages.module.scss";
export const AdvertiserWMDBPageComponent = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={style["page"]}>
      <NavBarComponent navbarModule={generateDummyNavbarData()} />
      <HeaderSimpleComponent headerSimpleModule={generateAdvertiserWMDBHeaderDummyData()} />
      <AdvertiserWMDBComponent advertiserModule={generateAdvertiserData()} />
      <div className={style["page-footer"]}>
        <FooterComponent footerModule={generateDummyFooterData()} />
      </div>
    </div>
  );
};
