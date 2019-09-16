import * as React from "react";

import styles from "./body-text-simple-component.module.scss";
import { Button } from "@app/prep/modules-prep/core";

export interface IBodyTextSimpleComponentProps {
  bgImage?: string;
  style?: object;
}

const BodyTextSimpleComponent = (props: IBodyTextSimpleComponentProps) => {
  const style = {
    backgroundImage: `url(${props.bgImage})`,
    paddingTop: "72px",
    paddingBottom: "72px",
    ...props.style
  };

  return (
    <div className={styles["body-text-simple"]} style={style}>
      <div className="uk-container">
        <div className={styles["body-text__title"]}>
          <h2>Over deze pagina</h2>
        </div>
        <div className={styles["body-text__content"]}>
          Er zijn heel veel citygames mogelijk in Amsterdam! U kunt zo de stad Amsterdam op een leuke manier beter leren
          kennen. U kunt GPS tochten door de stad doen, moordtochten, puzzeltochten enz. U kunt lopend Amsterdam
          verkennen tijdens uw citygame, maar ook per step, tuktuk, waterfiets of solex! Kiest u voor bepaalde wijken
          zoals de Wallen, of gaat u liever Zuid.
          <br />
          <br />
          Nog niet alles duidelijk? Stel je vraag!
        </div>
        <br />
        <Button title={"Stel je vraag"} variant={"primary"} href={"#"} />
      </div>
    </div>
  );
};
export { BodyTextSimpleComponent };
