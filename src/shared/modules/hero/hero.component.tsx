import * as React from "react";
import styles from "./hero-component.module.scss";
import { Input } from "@app/core/input";
import { Dropdown } from "@app/core/dropdown";
import { Button } from "@app/core/button";
import { ImageComponent } from "@app/core/image";
import { IHeroModule } from "@app/api/modules/hero/hero-module";
import { withRouter, RouteComponentProps } from "react-router";

export interface IHeroComponentProps {
  heroModule: IHeroModule;
  onSubmit?: (values: any) => void;
}

const Component = (props: IHeroComponentProps & RouteComponentProps) => {
  const {
    buttonTitle,
    dropdownCompanyPlaceholder,
    image,
    keywordPlaceholder,
    numberPersonsPlaceholder,
    filterSections,
    provincePlaceholder,
    title
  } = props.heroModule;

  const [companyValue, setCompanyValue] = React.useState<number>(-1);
  const [provincieText, setProvincieText] = React.useState("");
  const [keywordText, setKeywordText] = React.useState("");
  const [numberPersonText, setNumberPersonText] = React.useState("");
  const dropdownCompanyItems = filterSections.map(item => ({ value: item.id, text: item.title }));
  const onSubmit = () => {
    let finalUrl = "/overzicht";
    if (provincieText || keywordText || numberPersonText !== "0" || companyValue) {
      finalUrl = finalUrl.concat("?");
    }
    if (provincieText) {
      finalUrl = finalUrl.concat(`&region=${provincieText}`);
    }
    if (keywordText) {
      finalUrl = finalUrl.concat(`&keyword=${keywordText}`);
    }
    if (numberPersonText !== "0" && numberPersonText) {
      finalUrl = finalUrl.concat(`&range=${numberPersonText}`);
    }

    if (companyValue >= 0) {
      // tslint:disable-next-line
      const foundSection = filterSections.find(section => section.id == companyValue);
      if (foundSection) {
        const selectedItemsArrayString = foundSection.checkboxes.map(checkbox => checkbox.id).join("%2C");
        finalUrl = finalUrl.concat(`&categories=${selectedItemsArrayString}`);
      }
    }

    props.history.push(finalUrl);
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
          <form className={`${styles["hero__form"]} ${styles["form"]}`}>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area-dropdown"]}`}>
              <Dropdown
                onChange={setCompanyValue}
                value={companyValue}
                placeholder={dropdownCompanyPlaceholder}
                options={dropdownCompanyItems}
              />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input onChangeText={setProvincieText} name={"text"} placeholder={provincePlaceholder} />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input onChangeText={setKeywordText} name={"text"} placeholder={keywordPlaceholder} />
            </div>
            <div className={`${styles["hero__form-area"]} ${styles["hero__form-area--flex"]}`}>
              <Input
                onChangeText={setNumberPersonText}
                name={"text"}
                min={0}
                type={"number"}
                placeholder={numberPersonsPlaceholder}
              />
            </div>
            <Button onClick={onSubmit} fullWidth title={buttonTitle} variant={"primary"} />
          </form>
        </div>
      </div>
    </div>
  );
};

const HeroComponent = withRouter(Component);

export { HeroComponent };
