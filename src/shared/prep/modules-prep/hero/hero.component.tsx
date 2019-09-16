import * as React from "react";
import "./hero.component.scss";
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
  <div className="hero">
    <div className="hero__holder">
      <div className="hero__background">
        <ImageComponent src={image} />
      </div>
      <div className="hero__foreground">
        <div className="uk-container">
          <h1 className="hero__title">{title}</h1>
        </div>
      </div>
    </div>
    <div className="hero__form-holder">
      <div className="uk-container">
        <form action="/" className="hero__form form">
          <div className="hero__form-area">
            <Select {...selectOption} />
          </div>
          <div className="hero__form-area hero__form-area--flex">
            <Input name={"text"} placeholder={"Provincie of Plaats"} />
          </div>
          <div className="hero__form-area hero__form-area--flex">
            <Input name={"text"} placeholder={"Zoekwoord"} />
          </div>
          <div className="hero__form-area hero__form-area--flex">
            <Input name={"text"} type={"number"} placeholder={"Aantal personen"} />
          </div>
          <Button type={"submit"} title={"Toon 500 uitjes"} variant={"primary"} />
        </form>
      </div>
    </div>
  </div>
);

export { HeroComponent };
