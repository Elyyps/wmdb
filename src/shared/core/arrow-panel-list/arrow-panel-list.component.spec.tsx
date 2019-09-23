import React from "react";
import { shallow } from "enzyme";
import { ArrowPanelListComponent } from "./arrow-panel-list.component";

describe("[ArrowPanelList]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ArrowPanelListComponent title="Title" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
