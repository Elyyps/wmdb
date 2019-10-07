import React from "react";
import { shallow } from "enzyme";
import { ContactFormComponent } from "./contact-form.component";

describe("[ContactForm]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ContactFormComponent onSubmit={() => ""} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
