import { CLASSNAME__BUTTON } from "../../constants";
import React from "react";

export const EmptyFillerButton = () => {
  return (
    <div
      className={CLASSNAME__BUTTON}
      ref={(node) => {
        if (node) {
          node.style.setProperty("cursor", "auto", "important");
        }
      }}
    />
  );
};
