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

  const [companyError, setCompanyError] = React.useState(false);
  const [provincieError, setProvincieError] = React.useState(false);
  const [keywordError, setKeywordError] = React.useState(false);
  const [numberPersonError, setNumberPersonError] = React.useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    let isValid = true;
    if (!companyText.trim()) {
      setCompanyError(true);
      isValid = false;
    } else setCompanyError(false);
    if (!provincieText.trim()) {
      setProvincieError(true);
      isValid = false;
    } else setProvincieError(false);
    if (!keywordText.trim()) {
      setKeywordError(true);
      isValid = false;
    } else setKeywordError(false);
    if (!numberPersonText.trim()) {
      setNumberPersonError(true);
      isValid = false;
    } else setNumberPersonError(false);

    if (isValid) {
      if (props.onSubmit) {
        props.onSubmit({
          companyText,
          provincieText,
          keywordText,
          numberPersonText
        });
      }
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
            <div className={styles["hero__form-area"]}>
              <Dropdown
                isError={companyError ? "This field is mandatory" : ""}
                onChange={setCompanyText}
                placeholder={dropdownCompanyPlaceholder}
                options={dropdownCompanyItems}
              />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input
                isError={provincieError ? "This field is mandatory" : ""}
                onChange={setProvincieText}
                name={"text"}
                placeholder={provincePlaceholder}
              />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input
                isError={keywordError ? "This field is mandatory" : ""}
                onChange={setKeywordText}
                name={"text"}
                placeholder={keywordPlaceholder}
              />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input
                isError={numberPersonError ? "This field is mandatory" : ""}
                onChange={setNumberPersonText}
                name={"text"}
                type={"number"}
                placeholder={numberPersonsPlaceholder}
              />
            </div>
            <Button type={"submit"} title={buttonTitle} variant={"primary"} />
          </form>
        </div>
      </div>
    </div>
  );
};
export { HeroComponent };
