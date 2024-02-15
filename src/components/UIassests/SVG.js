import React from "react";
import "../styles/svg.css";
import { Row, Col } from "react-flexbox-grid";

const SVGs = ({
  type,
  height,
  width,
  className,
  style,
  alt,
  circle,
  sm,
  md,
  lg,
  xl,
}) => {
  const getClassName = () => {
    let classNames = "svg-medium";
    if (className) classNames += ` ${className}`;
    if (circle) classNames += " svg-circle";
    if (sm) classNames += " svg-small";
    if (md) classNames += " svg-medium";
    if (lg) classNames += " svg-large";
    if (xl) classNames += " svg-extra-large";
    return classNames;
  };

  const svgs = require(`../../Assets/svgs/${type}.svg`);

  return (
    <Row center="xs">
      <Col>
        <img
          src={svgs}
          alt={alt || ""}
          className={getClassName()}
          style={{ height, width, ...style }}
        />
      </Col>
    </Row>
  );
};

export default SVGs;
