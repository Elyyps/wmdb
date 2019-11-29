import React from "react";
import { shallow } from "enzyme";
import { AdvertiserWMDBComponent } from "./advertiser-wmdb.component";
import { generateAdvertiserData } from "@app/api/modules/advertiser-wmdb/end-point";

describe("[AdvertiserWMDB]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<AdvertiserWMDBComponent advertiserModule={generateAdvertiserData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
