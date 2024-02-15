import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import { Link } from "react-router-dom";
import Button from "../UIassests/Button";
import { isMobile } from "../UIassests/GeneralActions";

const Prices = () => {
  return (
    <>
      <Grid id="pricing">
        <div style={{ textAlign: "center", marginTop: isMobile ? "4rem" : "" }}>
          <h1>Prices</h1>
          <p>Two simple modes of payments</p>
        </div>
        <Space lg />
        <Space />
        <Row around="xs">
          <Col md={5} xs={12}>
            <div
              style={{
                border: "1px solid var(--main-font-color)",
                borderRadius: "30px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "25px",
                height: "auto",
                flexShrink: 0,
                textAlign: "center",
              }}
            >
              <h2>Individual Contractor</h2>
              <Space md />
              <div
                className="fas fa-user"
                style={{
                  fontSize: "100px",
                  color: "#848484",
                }}
              ></div>
              <Space />
              <Row between="xs" style={{ margin: 0 }}>
                <p className="paragraph">UI/UX Designer</p>
                <h3 style={{ fontWeight: "bold" }}>$4000/Month</h3>
              </Row>
              <Space sm />
              <Row between="xs" style={{ margin: 0 }}>
                <p className="paragraph">Frontend Developer</p>
                <h3 style={{ fontWeight: "bold" }}>$3500/Month</h3>
              </Row>{" "}
              <Space sm />
              <Row between="xs" style={{ margin: 0 }}>
                <p className="paragraph">Backend Developer</p>
                <h3 style={{ fontWeight: "bold" }}>$3500/Month</h3>
              </Row>{" "}
              <Space sm />
              <Row between="xs" style={{ margin: 0 }}>
                <p className="paragraph">FullStack Developer</p>
                <h3 style={{ fontWeight: "bold" }}>$4000/Month</h3>
              </Row>
              <Space />
              <p>All prices are for a month</p>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <div
              style={{
                borderRadius: "30px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                padding: "25px",
                height: "auto",
                flexShrink: 0,
                textAlign: "center",
                lineHeight: "100%",
                marginTop: isMobile ? 50 : "",
              }}
            >
              <h2 style={{ color: "var(--header-color)" }}>
                Product Development
              </h2>
              <Space md />
              <div
                className="fas fa-calculator"
                style={{
                  transform: "rotate(35.175deg)",
                  fontSize: "100px",
                  color: "#848484",
                }}
              ></div>
              <Space md />
              <p
                style={{
                  fontSize: "25px",
                  lineHeight: "normal",
                  color: "var(--header-color)",
                }}
              >
                Calculate an estimated cost with our product cost calculator
              </p>
              <Space lg />
              <Link to={"/cost_calculator"}>
                <Button
                  style={{
                    backgroundColor: "var(--prime-card-background)",
                    color: "white",
                    bottom: isMobile ? "10px" : "",
                  }}
                  fullRound
                >
                  Open Cost Calculator
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Space lg />
        <Space lg />
      </Grid>
    </>
  );
};

export default Prices;
