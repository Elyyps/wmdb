import React from "react";
import { shallow } from "enzyme";
import { ActivitiesComponent } from "./activities.component";
import { generateActivitiesData } from "@app/api/modules/activities/end-point";

describe("[Activities]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ActivitiesComponent activitiesModule={generateActivitiesData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
