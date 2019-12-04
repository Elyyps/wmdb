import * as React from "react";
import styles from "./organizations-component.module.scss";
import { LinkComponent } from "@app/core/link";
import { ILink } from "@app/api/core/link";
import { ModuleSectionComponent } from "@app/core/module-section";
import { IOrganisation } from "@app/api/core/organisation";

export interface IOrganizationsComponentProps {
  organisations: IOrganisation[];
}

const OrganizationsComponent = ({ organisations }: IOrganizationsComponentProps) => (
  <ModuleSectionComponent paddingTop={"40px"} paddingTopMobile="32px" paddingBottom={"40px"}>
    {organisations.map((organisation: IOrganisation, key: number) => (
      <div className={styles["organizations"]} key={key}>
        <h5>
          <LinkComponent to={organisation.title.url}>{organisation.title.title} </LinkComponent>
        </h5>

        {organisation.links && (
          <ul className={styles["organizations__list"]}>
            {organisation.links.map((link: ILink, i: number) => (
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
