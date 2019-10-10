import React from "react";
import { shallow } from "enzyme";
import { OtherActivitiesComponent } from "./other-activities.component";
import { generateOtherActivitiesData } from "@app/api/modules/other-activities/end-points";

describe("[OtherActivities]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<OtherActivitiesComponent otherActivities={generateOtherActivitiesData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
