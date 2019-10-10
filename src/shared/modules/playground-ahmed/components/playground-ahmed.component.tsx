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
import { CompanyOutingComponent } from "@app/modules/company-outing";
import { generateCompanyOutingData } from "@app/api/modules/company-outing/end-point";
import { OtherActivitiesComponent } from "@app/modules/other-activities";
import { generateOtherActivitiesData } from "@app/api/modules/other-activities/end-points";
import { FAQComponent } from "@app/modules/faq";
import { generateFAQData } from "@app/api/modules/faq/end-point";
import { OtherLocationsComponent } from "@app/modules/other-locations";
import { generateOtherLocationsData } from "@app/api/modules/other-locations/end-point";
import { FAQHeaderComponent } from "@app/modules/faq-header";
import PlaceholderImage2 from "@assets/img03.png";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => <div className={"uk-container"} />;

export { PlaygroundAhmedComponent };
