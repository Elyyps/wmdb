/* tslint:disable */
import React from "react";
import style from "./playground-ahmed-component.module.scss";
import { ModuleSectionComponent } from "@app/core/module-section";
import { NewActivityComponent } from "@app/modules/new-activity";
import { generateNewActivityData } from "@app/api/modules/new-activity/end-point";
import { OutingCardComponent } from "@app/core/outing-card";
import PlaceholderImage1 from "@assets/img-big.jpg";
import PlaceholderImage from "@assets/img02.png";
import ROOMS from "@assets/icons/rooms.svg";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div className={"uk-container"}>
    <NewActivityComponent newActivity={generateNewActivityData()} />
    <NavBarComponent navbar={generateNavbarData()} />
    <FooterComponent footer={generateFooterData()} />
    <OutingCardComponent
      {...{
        title: "Escape City - Het ontsnappingsspel van Mokum",
        subtitle: "Citygames in Amsterdam",
        image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage1],
        button: {
          title: "Lees meer",
          url: "#"
        },
        data: {
          icon: ROOMS,
          label: "10 - 1000 personen"
        },
        content:
          "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
      }}
    />
  </div>
);

export { PlaygroundAhmedComponent };
