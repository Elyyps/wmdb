
import React from "react";
import { shallow } from "enzyme";
import { OverviewComponent } from "./overview.component";

describe("[Overview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <OverviewComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  