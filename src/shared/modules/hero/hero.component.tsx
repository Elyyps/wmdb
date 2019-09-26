import * as React from "react";
import styles from "./hero-component.module.scss";
import { Button, ImageComponent, Input, Select } from "@app/prep/modules-prep/core";

export interface IHeroComponentProps {
  image?: string;
  title?: string;
}

const selectOption = {
  name: "select",
  placeholder: "Kies een bedrijfsuitje categorie",
  options: [{ value: "item", label: "Item" }, { value: "item2", label: "Item 2" }, { value: "item3", label: "Item 3" }]
};

const HeroComponent = ({ image, title }: IHeroComponentProps) => (
  <div className={styles["hero"]}>
    <div className={styles["hero__holder"]}>
      <div className={styles["hero__background"]}>
        <ImageComponent src={image} />
      </div>
      <div className={styles["hero__foreground"]}>
        <div className={"uk-container"}>
          <h1 className={styles["hero__title"]}>{title}</h1>
        </div>
      </div>
    </div>
    <div className={styles["hero__form-holder"]}>
      <div className={"uk-container"}>
        <form action="/" className={`${styles["hero__form"]} ${styles["form"]}`}>
          <div className={styles["hero__form-area"]}>
            <Select {...selectOption} />
          </div>
          <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
            <Input name={"text"} placeholder={"Provincie of Plaats"} />
          </div>
          <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
            <Input name={"text"} placeholder={"Zoekwoord"} />
          </div>
          <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
            <Input name={"text"} type={"number"} placeholder={"Aantal personen"} />
          </div>
          <Button type={"submit"} title={"Toon 500 uitjes"} variant={"primary"} />
        </form>
      </div>
    </div>
  </div>
);

export { HeroComponent };
