import React from "react";
import { shallow } from "enzyme";
import { BlogSingleComponent } from "./blog-single.component";
import { generateBlogSingleData } from "@app/api/modules/blog-single/end-point";

describe("[BlogSingle]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogSingleComponent blogSingle={generateBlogSingleData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
