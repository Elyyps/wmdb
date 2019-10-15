import * as React from "react";
import styles from "./hero-component.module.scss";
import { Input } from "@app/core/input";
import { Dropdown } from "@app/core/dropdown";
import { Button } from "@app/core/button";
import { ImageComponent } from "@app/core/image";
import { IHeroModule } from "@app/api/modules/hero/hero-module";

export interface IHeroComponentProps {
  heroModule: IHeroModule;
  onSubmit?: (values: any) => void;
}

const HeroComponent = (props: IHeroComponentProps) => {
  const {
    buttonTitle,
    dropdownCompanyItems,
    dropdownCompanyPlaceholder,
    image,
    keywordPlaceholder,
    numberPersonsPlaceholder,
    provincePlaceholder,
    title
  } = props.heroModule;

  const [companyText, setCompanyText] = React.useState("");
  const [provincieText, setProvincieText] = React.useState("");
  const [keywordText, setKeywordText] = React.useState("");
  const [numberPersonText, setNumberPersonText] = React.useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit({
        companyValue: companyText,
        provincieText,
        keywordText,
        numberPersonText
      });
    }

    return false;
  };

  return (
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
          <form onSubmit={onSubmit} className={`${styles["hero__form"]} ${styles["form"]}`}>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area-dropdown"]}`}>
              <Dropdown
                onChange={setCompanyText}
                placeholder={dropdownCompanyPlaceholder}
                options={dropdownCompanyItems}
              />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input onChange={setProvincieText} name={"text"} placeholder={provincePlaceholder} />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input onChange={setKeywordText} name={"text"} placeholder={keywordPlaceholder} />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input
                onChange={setNumberPersonText}
                name={"text"}
                min={0}
                type={"number"}
                placeholder={numberPersonsPlaceholder}
              />
            </div>
            <Button fullWidth type={"submit"} title={buttonTitle} variant={"primary"} />
          </form>
        </div>
      </div>
    </div>
  );
};
export { HeroComponent };
