import React from "react";
import { shallow } from "enzyme";
import { CategoryOverviewComponent } from "./category-overview.component";
import { GenerateDummyCategoryOverviewData } from "@app/api/modules/category-overview/dummy-data";

describe("[CategoryOverview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <CategoryOverviewComponent categoryOverviewModule={GenerateDummyCategoryOverviewData()} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
