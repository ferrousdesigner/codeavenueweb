import React from "react";
import "../styles/card.css";

const Card = ({ children, withBorder, horizontal }) => {
  return (
    <div
      className={`humans-card ${
        withBorder ? "with-border" : horizontal ? "horizontal-card" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
