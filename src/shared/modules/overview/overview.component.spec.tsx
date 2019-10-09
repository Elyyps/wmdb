import React from "react";
import { shallow } from "enzyme";
import { OverviewComponent } from "./overview.component";
import { generateDummyOverviewModule } from "@app/api/modules/overview";

describe("[Overview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<OverviewComponent overviewModule={generateDummyOverviewModule()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
