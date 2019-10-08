import * as React from "react";
import styles from "./other-locations-component.module.scss";
import { Section } from "@app/core/section";
import { IOtherLocations } from "@app/api/modules/other-locations/other-locations";
import { ILocation } from "@app/api/core/location";
import { LinkComponent } from "@app/core/link";
import { ILink } from "@app/api/core/link";

export interface IOtherLocationsComponentProps {
  otherLocations: IOtherLocations;
}

const OtherLocationsComponent = (props: IOtherLocationsComponentProps) => (
  <Section title="Andere locaties" backgroundColor={"#e8f2fc"}>
    {props.otherLocations.locations.map((locations: ILocation, key: number) => (
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
  </Section>
);

export { OtherLocationsComponent };
