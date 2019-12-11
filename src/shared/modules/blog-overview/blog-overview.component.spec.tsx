import React from "react";
import { shallow } from "enzyme";
import { BlogOverviewComponent } from "./blog-overview.component";
import { generateBlogOverviewData } from "@app/api/modules/blog-overview/end-point";

describe("[BlogOverview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogOverviewComponent blogOverview={generateBlogOverviewData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
