import * as React from "react";
import styles from "./bodytext-component.module.scss";
import { HtmlRenderComponent } from "../html-render";

export interface IBodyTextComponentProps {
  containerAlignment?: "left" | "center" | "right";
  containerSize?: "large" | "medium" | "small" | "full";
  html: string;
  paddingBottom?: string;
  paddingTop?: string;
  style?: object;
}

export const BodyTextComponent = (props: IBodyTextComponentProps) => {
  const { style, containerAlignment, containerSize, html } = props;

  const alignmentDefault = containerAlignment ? containerAlignment : "left";
  const sizeDefault = containerSize ? containerSize : "full";

  return (
    <div
      style={style}
      className={`uk-container ${styles[`body-text`]} ${styles[`body-text--${alignmentDefault}`]} ${
        styles[`body-text--${sizeDefault}`]
      }`}
    >
      <HtmlRenderComponent html={html} />
    </div>
  );
};
