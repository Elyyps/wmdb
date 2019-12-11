import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BlogSingleComponent } from "./blog-single.component";
import { generateBlogSingleData } from "@app/api/modules/blog-single/end-point";

storiesOf("BlogSingle", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BlogSingleComponent blogSingle={generateBlogSingleData()} />);
