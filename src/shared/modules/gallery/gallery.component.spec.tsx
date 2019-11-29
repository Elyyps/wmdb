import React from "react";
import { shallow } from "enzyme";
import { GalleryComponent } from "./gallery.component";
import { generateGalleryData } from "@app/api/modules/header-gallery/end-point";

describe("[Gallery]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<GalleryComponent galleryModule={generateGalleryData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
