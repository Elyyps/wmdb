import * as React from "react";
import { Parser } from "html-to-react";

export interface IHtmlRenderComponentProps {
  html: string;
}

const HtmlRenderComponent = (props: IHtmlRenderComponentProps) => (
  <React.Fragment>{Parser().parse(props.html)} </React.Fragment>
);

export { HtmlRenderComponent };
