import * as React from "react";
import styles from "./footer-component.module.scss";
import { LogoComponent } from "@app/prep/modules-prep/core";
import { LinkComponent } from "@app/core/link";
import { IconComponent } from "@app/core/icon";
import Facebook from "@assets/icons/facebook.svg";
import { IFooter } from "@app/api/modules/footer/footer.module";

export interface IFooterComponentProps {
  footerModule: IFooter;
}

const FooterComponent = (props: IFooterComponentProps) => (
  <div className={styles["footer"]}>
    <div className="uk-container">
      <div className={styles["footer__holder"]}>
        <div className={styles["footer__logo"]}>
          <LogoComponent />
        </div>

        <div className={styles["footer__side"]}>
          <ul className={styles["footer__nav"]}>
            {props.footerModule.links.map((item, key) => (
              <li key={key}>
                <LinkComponent to={item.url}>{item.title}</LinkComponent>
              </li>
            ))}
          </ul>

          <LinkComponent to={"/"}>
            <IconComponent icon={Facebook} size="24px" fillColor={"#3b5998"} />
          </LinkComponent>
        </div>
      </div>
    </div>
  </div>
);

export { FooterComponent };
