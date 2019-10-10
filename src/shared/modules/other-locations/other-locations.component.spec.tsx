import React from "react";
import { shallow } from "enzyme";
import { OtherLocationsComponent } from "./other-locations.component";
import { generateOtherLocationsData } from "@app/api/modules/other-locations/end-point";

describe("[OtherLocations]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<OtherLocationsComponent otherLocations={generateOtherLocationsData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
