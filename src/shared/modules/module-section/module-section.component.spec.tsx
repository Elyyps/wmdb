import React from "react";
import { shallow } from "enzyme";
import { ModuleSectionComponent } from "./module-section.component";

describe("[ModuleSection]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ModuleSectionComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
