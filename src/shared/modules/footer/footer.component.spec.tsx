import React from "react";
import { shallow } from "enzyme";
import { FooterComponent } from "./footer.component";
import { generateFooterData } from "@app/api/modules/footer/end-point";

describe("[Footer]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FooterComponent footer={generateFooterData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
