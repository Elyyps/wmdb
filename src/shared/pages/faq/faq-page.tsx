import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { FAQComponent } from "@app/modules/faq";
import { generateFAQData } from "@app/api/modules/faq/end-point";
import { FAQHeaderComponent } from "@app/modules/faq-header";
import PlaceholderImage from "@assets/logo-wmdb-header.svg";

export const FAQPageComponent = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <NavBarComponent navbarModule={generateNavbarData()} />
      <FAQHeaderComponent
        title={"Veelgestelde vragen"}
        content={"Alle vragen omtrent WegmetdeBaas. Hoe vind je zo snel mogelijk het perfecte uitje?"}
        image={PlaceholderImage}
      />
      <FAQComponent FAQModule={generateFAQData()} />
      <div style={{ position: "relative", bottom: "0" }}>
        <FooterComponent footerModule={generateFooterData()} />
      </div>
    </div>
  );
};
