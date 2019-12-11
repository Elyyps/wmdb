import * as React from "react";
import styles from "./blog-single-component.module.scss";
import { ImageComponent } from "@app/core/image";
import { BodyTextComponent } from "@app/core/bodytext";
import { IBlogSingle } from "@app/api/modules/blog-single/blog-single";
import { BlogSingleFormComponent } from "@app/core/blog-single-form";
import { ModuleSectionComponent } from "@app/core/module-section";
import { Breadcrumb } from "@app/core/breadcrumb";

export interface IBlogSingleComponentProps {
  blogSingle: IBlogSingle;
}

const BlogSingleComponent = ({ blogSingle }: IBlogSingleComponentProps) => {
  const [numberOfReactions, setNumberOfReactions] = React.useState(0);

  return (
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
            <br />
            <br />
          </p>
          <br />

          <div className={styles["blog-single-form"]}>
            <h2>Reacties {numberOfReactions}</h2>
            <BlogSingleFormComponent onSubmit={() => setNumberOfReactions(numberOfReactions + 1)} />
          </div>
        </div>
      </ModuleSectionComponent>
    </div>
  );
};

export { BlogSingleComponent };
