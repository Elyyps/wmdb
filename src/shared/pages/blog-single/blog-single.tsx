import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { BlogSingleComponent } from "@app/modules/blog-single";
import { generateBlogSingleData } from "@app/api/modules/blog-single/end-point";

export const BlogSinglePage = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <NavBarComponent navbarModule={generateNavbarData()} />
      <BlogSingleComponent blogSingle={generateBlogSingleData()} />
      <div style={{ position: "relative", bottom: "0" }}>
        <FooterComponent footerModule={generateFooterData()} />
      </div>
    </div>
  );
};
