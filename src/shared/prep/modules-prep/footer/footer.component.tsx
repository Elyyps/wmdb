import * as React from "react";
import { Link } from "react-router-dom";
import "./footer-component.scss";
import { IconComponent, LogoComponent } from "@app/prep/modules-prep/core";
import Facebook from "@assets/icons/facebook.svg";

export interface IFooterComponentProps {}

const FooterComponent = (props: IFooterComponentProps) => {
  const menuNav = [
    {
      title: "info@wmdk.nl",
      link: "/"
    },
    {
      title: "Web-Effects",
      link: "/"
    },
    {
      title: "Privacystatement",
      link: "/"
    },
    {
      title: "Disclaimer",
      link: "/"
    }
  ];

  return (
    <div className="footer">
      <div className="uk-container">
        <div className="footer__holder">
          <div className="footer__logo">
            <LogoComponent />
          </div>

          <div className="footer__side">
            <ul className="footer__nav">
              {menuNav.map((item, key) => (
                <li key={key}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>

            <Link to={"/"}>
              <IconComponent icon={Facebook} size="24px" color={"#3b5998"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterComponent };
