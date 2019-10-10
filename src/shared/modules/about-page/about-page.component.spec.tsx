import React from "react";
import { shallow } from "enzyme";
import { AboutPageComponent } from "./about-page.component";
import { generateAboutPageData } from "@app/api/modules/about-page/end-point";

describe("[AboutPage]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<AboutPageComponent aboutPage={generateAboutPageData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
