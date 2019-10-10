import React from "react";
import { shallow } from "enzyme";
import { NewActivityComponent } from "./new-activity.component";
import { generateNewActivityData } from "@app/api/modules/new-activity/end-point";

describe("[NewActivity]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<NewActivityComponent newActivityModule={generateNewActivityData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
