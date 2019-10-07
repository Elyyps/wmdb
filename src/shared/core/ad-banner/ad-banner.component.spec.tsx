import React from "react";
import { shallow } from "enzyme";
import { AdBannerComponent } from "./ad-banner.component";
import RECTANGLE from "@assets/rectangle.png";

describe("[AdBanner]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <AdBannerComponent
        content={"Surfen? Dat doe je in Zeeland."}
        backgroundImage={RECTANGLE}
        button={{ title: "Meer info", url: "/" }}
        advertisement={"Advertentie"}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
