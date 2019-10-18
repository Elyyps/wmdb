import * as React from "react";
import styles from "./other-locations-component.module.scss";
import { IOtherLocationsModule } from "@app/api/modules/other-locations/other-locations";
import { ILocation } from "@app/api/core/location";
import { LinkComponent } from "@app/core/link";
import { ILink } from "@app/api/core/link";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface IOtherLocationsComponentProps {
  otherLocationsModule: IOtherLocationsModule;
}

const OtherLocationsComponent = ({ otherLocationsModule }: IOtherLocationsComponentProps) => (
  <ModuleSectionComponent
    title="Andere locaties"
    backgroundColor={"#e8f2fc"}
    paddingTop={"0px"}
    paddingTopMobile="0px"
    paddingBottom={"72px"}
  >
    {otherLocationsModule.locations.map((locations: ILocation, key: number) => (
      <div className={styles["other-locations"]} key={key}>
        <h5>{locations.title}</h5>
        {locations.links && (
          <ul className={styles["other-locations__list"]}>
            {locations.links.map((link: ILink, i: number) => (
              <li key={i}>
                <LinkComponent to={link.url}>{link.title}</LinkComponent>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </ModuleSectionComponent>
);

export { OtherLocationsComponent };
