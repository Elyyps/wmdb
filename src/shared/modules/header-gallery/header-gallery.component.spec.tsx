import React from "react";
import { shallow } from "enzyme";
import { HeaderGalleryComponent } from "./header-gallery.component";

import { generateGalleryData } from "@app/api/modules/header-gallery/end-point";

describe("[HeaderGallery]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<HeaderGalleryComponent headerGallery={generateGalleryData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
