import * as React from "react";
import styles from "./blog-single-component.module.scss";
import { ImageComponent } from "@app/core/image";
import { BodyTextComponent } from "@app/core/bodytext";
import { IBlogSingle } from "@app/api/modules/blog-single/blog-single";
import { ModuleSectionComponent } from "@app/core/module-section";
import { Breadcrumb } from "@app/core/breadcrumb";

export interface IBlogSingleComponentProps {
  blogSingle: IBlogSingle;
}

const BlogSingleComponent = ({ blogSingle }: IBlogSingleComponentProps) => (
  <div className={styles["blog-single"]}>
    <div className="uk-container">
      <Breadcrumb breadcrumbs={blogSingle.path} />
      <ImageComponent src={blogSingle.headerImage} />
    </div>
    <ModuleSectionComponent paddingTop={"40px"} paddingBottom={"40px"} size="small">
      <div className={styles["blog-single-body"]}>
        <h1>{blogSingle.title}</h1>
        <p className={styles["blog-single-body-text"]}>
          <BodyTextComponent html={blogSingle.content} />
        </p>
      </div>
    </ModuleSectionComponent>
  </div>
);

export { BlogSingleComponent };
