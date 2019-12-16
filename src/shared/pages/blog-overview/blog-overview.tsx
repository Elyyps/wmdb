import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { FooterComponent } from "@app/modules/footer";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { BlogOverviewComponent } from "@app/modules/blog-overview";
import { generateBlogOverviewData } from "@app/api/modules/blog-overview/end-point";
import { HeaderSimpleComponent } from "@app/modules/header-simple";
import { generateBlogHeaderDummyData } from "@app/api/modules/header-simple";
import style from "../pages.module.scss";
export const BlogOverviewPage = () => (
  <div className={style["page"]}>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <HeaderSimpleComponent headerSimpleModule={generateBlogHeaderDummyData()} />
    <BlogOverviewComponent blogOverview={generateBlogOverviewData()} />
    <div className={style["page-footer"]}>
      <FooterComponent footerModule={generateFooterData()} />
    </div>
  </div>
);
