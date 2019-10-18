import React from "react";
import { shallow } from "enzyme";
import { ContactComponent } from "./contact.component";
import { generateContactData } from "@app/api/modules/contact/end-point";

describe("[Contact]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ContactComponent contactModule={generateContactData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
