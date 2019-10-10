import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { FAQComponent } from "@app/modules/faq";
import { generateFAQData } from "@app/api/modules/faq/end-point";
import { FAQHeaderComponent } from "@app/modules/faq-header";
import PlaceholderImage2 from "@assets/img03.png";

export const FAQPageComponent = () => (
  <React.Fragment>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <FAQHeaderComponent
      title={"Veelgestelde vragen"}
      content={"Alle vragen omtrent WegmetdeBaas. Hoe vind je zo snel mogelijk het perfecte uitje?"}
      image={PlaceholderImage2}
    />
    <FAQComponent FAQModule={generateFAQData()} />
    <FooterComponent footerModule={generateFooterData()} />
  </React.Fragment>
);
