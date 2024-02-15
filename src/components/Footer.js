import React from "react";
import Space from "./UIassests/Space";
import { Col, Grid, Row } from "react-flexbox-grid";
import logoWhite from "../Assets/full_logo.png";
import "./styles/footer.css";
import { isMobile } from "./UIassests/GeneralActions";
const Footer = () => {
  return (
    <>
      <Grid>
        <div
          style={{
            background: "var(--main-background-color)",
            height: "100%",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <Space />
          <Row middle="md" center="xs">
            <Col xs={6} style={{ textAlign: isMobile ? "center" : "left" }}>
              <img
                id="footer-logo"
                src={logoWhite}
                alt=""
                style={{ width: "250px" }}
              />
              <p style={{ fontSize: "1.15rem" }}>Code Avenue Private Limited</p>
            </Col>
            <Col xs={6} style={{ textAlign: isMobile ? "center" : "right" }}>
              <p style={{ color: "var(--header-color)" }}>
                Feel free to reach out to us at
              </p>
              <p className="footer-info" style={{ fontSize: "1.15rem" }}>
                contact@codeavenueindia.com
              </p>
            </Col>
          </Row>
          <Space />
        </div>
      </Grid>
    </>
  );
};

export default Footer;
