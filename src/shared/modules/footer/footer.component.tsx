import * as React from "react";
import styles from "./footer-component.module.scss";
import { LinkComponent } from "@app/core/link";
import { IconComponent } from "@app/core/icon";
import Facebook from "@assets/icons/facebook.svg";
import { IFooterModule } from "@app/api/modules/footer/footer.module";
import { LogoComponent } from "@app/core/logo/logo.component";

export interface IFooterComponentProps {
  footerModule: IFooterModule;
}

const FooterComponent = (props: IFooterComponentProps) => (
  <div className={styles["footer"]}>
    <div className="uk-container">
      <div className={styles["footer__holder"]}>
        <div className={styles["footer__logo"]}>
          <LogoComponent logo={props.footerModule.logo} />
        </div>

        <div className={styles["footer__side"]}>
          <ul className={styles["footer__nav"]}>
            {props.footerModule.links.map((item, key) => (
              <li key={key}>
                <LinkComponent to={item.url}>{item.title}</LinkComponent>
              </li>
            ))}
          </ul>

          <a role="button" href={"/"}>
            <IconComponent icon={Facebook} size="24px"  />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export { FooterComponent };
