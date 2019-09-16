import React from "react";
import "./collapse-component.scss";

export interface ICollapseItemProps {
  callback?: (identifier?: number) => void;
  content?: JSX.Element;
  identifier?: number;
  opened?: boolean;
  title?: string;
}

const CollapseItem = ({ title, content, identifier, callback, opened }: ICollapseItemProps) => {
  const invokeCallback = () => {
    if (callback) {
      callback(identifier);
    }
  };

  return (
    <div className={`collapse__item ${opened ? "show" : "hide"}`}>
      <button onClick={invokeCallback} className="collapse__item-title">
        {title}
      </button>
      <div className="collapse__item-body">{content}</div>
    </div>
  );
};

export { CollapseItem };
