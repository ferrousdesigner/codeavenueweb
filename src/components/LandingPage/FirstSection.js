import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import Button from "../UIassests/Button";
import phone1 from "../../Assets/Illustration1.png";
import { isMobile } from "../UIassests/GeneralActions";
import { useNavigate } from "react-router-dom";
import { scrollToSection } from "../../App";
import oddup from "./../../Assets/clients/oddup.png";
import shoppio from "./../../Assets/clients/shoppio.png";
import foleoz from "./../../Assets/clients/foleoz2.png";

import teletask from "./../../Assets/clients/Teletask.png";
import zeehaus from "./../../Assets/clients/zeehaus.png";
export const Img = ({ src, style }) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        width: "auto",
        height: isMobile ? "40vh" : "80vh",
        objectFit: "contain",
        margin: "3rem 0 ",
        ...style,
      }}
    />
  );
};
const FirstSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid>
        <Row middle="xs">
          {isMobile && (
            <Col
              style={{
                justifyContent: !isMobile ? "flex-end" : "center",
                display: "flex",
              }}
              xs={12}
              md={5}
            >
              <Img src={phone1} style={{ height: "40vh" }} />
            </Col>
          )}
          <Col xs={12} md={7}>
            <div>
              <h1>Transform your DREAMS into REALITY</h1>
              <p>
                At Code Avenue, we transform visions into reality, crafting
                bespoke digital solutions that elevate your business to new
                heights.
              </p>
            </div>
            <Space md />
            <div
              style={{
                textAlign: isMobile ? "left" : "left",
              }}
            >
              <Button fullRound onClick={() => navigate("/contact_us")}>
                Contact Us
              </Button>
              <Button
                withBorder
                fullRound
                onClick={() => scrollToSection("#services")}
              >
                Learn More
              </Button>
            </div>
          </Col>
          {!isMobile && (
            <Col
              style={{
                justifyContent: !isMobile ? "flex-end" : "center",
                display: "flex",
              }}
              xs={12}
              md={5}
            >
              <Img src={phone1} />
            </Col>
          )}
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <h1>Our Clients</h1>
            <p>
              Our teams has helped in creating several successful products in
              the last decade <br />
              Some of them are listed below.
            </p>
            <Row
              between="xs"
              style={{ marginTop: "4rem", filter: "grayscale(1)" }}
            >
              <Col xs={12} md={2}>
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  href="https://oddup.com"
                >
                  <Img
                    src={oddup}
                    style={{ width: "100%", margin: "1rem 0", height: "auto" }}
                  />
                </a>
              </Col>
              <Col xs={12} md={2}>
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  href="https://zeehaus.com"
                >
                  <Img
                    style={{
                      width: "100%",
                      margin: "1rem 0",
                      height: "auto",
                      marginTop: "0.4rem",
                      opacity: 0.9,
                    }}
                    src={zeehaus}
                  />
                </a>
              </Col>
              <Col xs={12} md={2}>
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  href="https://www.teletask.com/"
                >
                  <Img
                    style={{
                      width: "100%",
                      margin: "1rem 0",
                      height: "auto",
                      opacity: 0.7,
                    }}
                    src={teletask}
                  />
                </a>
              </Col>
              <Col xs={12} md={2}>
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  href="https://shoppio.life"
                >
                  <Img
                    style={{
                      width: "100%",
                      margin: "1rem 0",
                      height: "auto",
                      marginTop: "0.2rem",
                      opacity: 0.7,
                    }}
                    src={shoppio}
                  />
                </a>
              </Col>
              <Col xs={12} md={2}>
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  href="https://foleoz.com"
                >
                  <Img
                    src={foleoz}
                    style={{
                      width: "100%",
                      margin: "1rem 0",
                      height: "auto",
                      marginTop: "0.6rem",
                      opacity: 0.7,
                    }}
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default FirstSection;
