import * as React from "react";
import styles from "./organizations-component.module.scss";
import { ILocation } from "@app/api/core/location";
import { LinkComponent } from "@app/core/link";
import { ILink } from "@app/api/core/link";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface IOrganizationsComponentProps {
  locations: ILocation[];
}

const OrganizationsComponent = ({ locations }: IOrganizationsComponentProps) => (
  <ModuleSectionComponent paddingTop={"40px"} paddingTopMobile="32px" paddingBottom={"40px"}>
    {locations.map((location: ILocation, key: number) => (
      <div className={styles["organizations"]} key={key}>
        <h5>{location.title}</h5>
        {location.links && (
          <ul className={styles["organizations__list"]}>
            {location.links.map((link: ILink, i: number) => (
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

export { OrganizationsComponent };
