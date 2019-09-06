import React, { useState, useEffect } from "react";
import "./sidebar.component.scss";
import Search from "@assets/icons/search.svg";
import CROSS from "@assets/icons/cross.svg";
import { Button, IconComponent, Input } from "@app/prep/modules-prep/core";
import classNames from "classnames";

interface ISidebarProps {
  children?: any;
  searchPlaceholder: string;
  title: string;
}

const Sidebar = ({ title, children, searchPlaceholder }: ISidebarProps) => {
  const [isActive, setIsActive] = useState(false);
  const handelClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    if (isActive) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <div className="sidebar-wrapper">
      <button className={"button-search uk-hidden@m"} onClick={handelClick}>
        <IconComponent icon={Search} size={"15px"} />
        <span>{searchPlaceholder}</span>
      </button>
      <div className={classNames("sidebar", { isActive })}>
        <div className="sidebar__head">
          <div className="sidebar__title">
            <button role={"button"} onClick={handelClick} className="uk-hidden@m">
              <IconComponent icon={CROSS} size={"15px"} />
            </button>
            <h2>{title}</h2>
            <span className={"uk-hidden@m"}>Wissen</span>
          </div>
          <Input placeholder={searchPlaceholder} icon={Search} name={"search"} />
        </div>
        {children}
        <div className="sidebar-action uk-hidden@m">
          <Button title={"Toon uitjes"} variant={"primary"} href={"#"} />
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
