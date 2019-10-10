import * as React from "react";
import "./section.component.scss";
import classNames from "classnames";

interface ISectionProps {
  align?: string;
  backgroundColor?: string;
  children?: any;
  paddingBottom?: string;
  paddingTop?: string;
  pattern?: boolean;
  size?: string;
  title?: string;
}

const Section = (props: ISectionProps) => {
  const sectionClassName = classNames("section", {
    [`section--pattern`]: props.pattern,
    [`section--${props.align}`]: props.align,
    [`section--${props.size}`]: props.size
  });

  const styles = {
    backgroundColor: props.backgroundColor,
    paddingBottom: props.paddingBottom,
    paddingTop: props.paddingTop
  };

  return (
    <div className={sectionClassName} style={styles}>
      <div className="uk-container">
        {props.title && <h2 className="section__title">{props.title}</h2>}
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export { Section };
