import React from "react";
import { shallow } from "enzyme";
import { EventCardComponent } from "./event-card.component";

describe("[EventCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<EventCardComponent link="" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
