import React from "react";
import { Row } from "react-flexbox-grid";
import "../styles/checkbox.css";
const Checkbox = ({
  title,
  subtitle,
  onClick,
  isChecked,
  isRadio,
  checkCircle,
}) => {
  return (
    <div style={{ padding: "0.5rem 0" }}>
      <Row between="xs" middle="xs">
        <label>
          <input
            className={checkCircle ? "checkbox-with-circle" : ""}
            type={isRadio ? "radio" : "checkbox"}
            checked={isChecked}
            onChange={onClick}
          />
          {title && (
            <span
              style={{
                marginLeft: "1rem",
                fontWeight: isChecked ? "bolder" : "normal",
                color: "var(--header-color)",
              }}
            >
              {title}
            </span>
          )}
        </label>
        {subtitle && (
          <p
            style={{
              marginRight: "1rem",
              fontWeight: isChecked ? "bolder" : "normal",
              color: "var(--header-color)",
            }}
          >
            {subtitle}
          </p>
        )}
      </Row>
    </div>
  );
};

export default Checkbox;
