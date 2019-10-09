import React from "react";
import { shallow } from "enzyme";
import { FAQHeaderComponent } from "./faq-header.component";
import PlaceholderImage2 from "@assets/img03.png";

describe("[FAQHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <FAQHeaderComponent
        title={"Veelgestelde vragen"}
        content={"Alle vragen omtrent WegmetdeBaas. Hoe vind je zo snel mogelijk het perfecte uitje?"}
        image={PlaceholderImage2}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
