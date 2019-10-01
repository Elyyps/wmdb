import React from "react";
import { shallow } from "enzyme";
import { HeaderGalleryComponent } from "./header-gallery.component";
import Oasis from "@assets/oasis.jpg";
import Image from "@assets/img02.png";
import Rectangle from "@assets/rectangle.png";
import Big from "@assets/img-big.jpg";
import Grid from "@assets/img-grid.png";
const imageList = [Oasis, Image, Oasis, Big, Grid, Rectangle];
describe("[HeaderGallery]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<HeaderGalleryComponent images={imageList} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
