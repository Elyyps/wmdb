import * as React from "react";
import styles from "./other-locations-component.module.scss";
import { IOtherLocationsModule } from "@app/api/modules/other-locations/other-locations";
import { ILocation, ILocationInfo } from "@app/api/core/location";

import { ModuleSectionComponent } from "@app/core/module-section";
import { RouteComponentProps, withRouter } from "react-router";

export interface IOtherLocationsComponentProps {
  otherLocationsModule: IOtherLocationsModule;
}

const Component = (props: IOtherLocationsComponentProps & RouteComponentProps) => {
  const findLocation = (location: string) => {
    let finalUrl = "/overzicht";
    finalUrl = finalUrl.concat(`?region=${location}`);

    props.history.push(finalUrl);
  };

  return (
    <ModuleSectionComponent
      title={props.otherLocationsModule.title}
      backgroundColor={"#e8f2fc"}
      paddingTop={"72px"}
      paddingTopMobile="32px"
      paddingBottom={"72px"}
    >
      {props.otherLocationsModule.locations.map((locations: ILocation, key: number) => (
        <div className={styles["other-locations"]} key={key}>
          <h5>{locations.title}</h5>
          {locations.locations && (
            <ul className={styles["other-locations__list"]}>
              {locations.locations.map((location: ILocationInfo, i: number) => (
                <li key={i} role="button" onClick={() => findLocation(location.value)}>
                  {location.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </ModuleSectionComponent>
  );
};
const OtherLocationsComponent = withRouter(Component);
export { OtherLocationsComponent };
