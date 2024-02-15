import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import Button from "../UIassests/Button";
import logoBlack from "../../Assets/favicon.png";
import "../styles/nav.css";
import { isMobile } from "../UIassests/GeneralActions";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../App";

const Nav = () => {
  const toggleTheme = () =>
    localStorage.getItem("theme") === "dark" ? "light" : "dark";

  const [themeIcon, setIcon] = useState(
    localStorage.getItem("theme") === "dark" ? "fas fa-moon" : "fas fa-sun"
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  }, []);

  const applyDarkTheme = () => {
    setIcon("fas fa-moon");
    let body = document.getElementsByClassName("default")[0];
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("nav-logo")?.classList.add("invert");
    document.getElementById("footer-logo")?.classList.add("invert");
  };

  const applyLightTheme = () => {
    setIcon("fas fa-sun");
    let body = document.getElementsByClassName("default")[0];
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    localStorage.setItem("theme", "light");
    document.getElementById("nav-logo")?.classList.remove("invert");
    document.getElementById("footer-logo")?.classList.remove("invert");
  };

  const toggleThemeHandler = () => {
    const newTheme = toggleTheme();
    if (newTheme === "dark") {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  };

  return (
    <>
      <Grid className="nav">
        {isMobile ? "" : <Space md />}
        <Row middle="xs">
          <Col lg={4} md={4} sm={4} xs={9}>
            <a href="/">
              <img id={"nav-logo"} width="50px" src={logoBlack} alt="" />
            </a>
          </Col>
          {isMobile ? (
            ""
          ) : (
            <Col lg={5} md={5} sm={6}>
              <Row>
                <div
                  className="nav-items"
                  onClick={() => scrollToSection("#services")}
                >
                  Services
                </div>
                <div
                  className="nav-items"
                  onClick={() => scrollToSection("#why_us")}
                >
                  Why us?
                </div>
                <div
                  className="nav-items"
                  onClick={() => scrollToSection("#pricing")}
                >
                  Pricing
                </div>
              </Row>
            </Col>
          )}
          <Col
            lg={3}
            md={3}
            sm={4}
            xs={3}
            style={{ textAlign: isMobile ? "right" : "center" }}
          >
            {isMobile ? (
              ""
            ) : (
              <Link to="/contact_us">
                <Button fullRound noMar withBorder>
                  Let's Connect
                </Button>
              </Link>
            )}
            <Button
              circle
              noMar
              withBorder
              onClick={() => {
                toggleThemeHandler();
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  color: "var(--logo-color)",
                }}
                className={themeIcon}
                to="#"
              ></span>{" "}
            </Button>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Nav;
