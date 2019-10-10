import React from "react";
import { shallow } from "enzyme";
import { CompanyOutingCardComponent } from "./company-outing-card.component";

describe("[CompanyOutingCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<CompanyOutingCardComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
