import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Card from "../UIassests/Card";
import SVGs from "../UIassests/SVG";
import Space from "../UIassests/Space";
import Footer from "../Footer";

const Services = () => {
  const webList = [
    {
      label: "A Web app or a back-end to a Mobile app.",
    },
    {
      label: "Web apps are versatile and accessible across various devices.",
    },
    {
      label:
        "We can be developed using a variety of technologies like React, Angular, or Vue.js",
    },
  ];

  const androidList = [
    {
      label: "An Android Phone / Tablet app (Excluding back-end)",
    },
    {
      label: "Android apps cater to a large user base across the globe.",
    },
    {
      label: "We offer seamless integration with Google services and APIs.",
    },
  ];

  const iOSList = [
    {
      label: "An iPhone / iPad app (Excluding back-end)",
    },
    {
      label:
        "iOS apps provide a seamless user experience across Apple devices.",
    },
    {
      label:
        "We leverage Apple's ecosystem and design principles for optimal performance.",
    },
  ];
  return (
    <>
      <Grid>
        <div style={{ textAlign: "center" }}>
          <h1>Services</h1>
          <p>
            The items below are the things that describe your app and what it
            needs to do on different OS platforms.
          </p>
        </div>
        <Space lg />
        <Row>
          <Col md={4}>
            <SVGs lg type={"web"} />
          </Col>
          <Col md={8}>
            <Card horizontal>
              <Row between="xs">
                <h2>Web</h2>
                <span
                  style={{ padding: "10px" }}
                  className="fas fa-xl fa-desktop"
                ></span>
              </Row>
              {webList.map((web) => (
                <ul>
                  <li>{web.label}</li>
                </ul>
              ))}
            </Card>
          </Col>
        </Row>
        <Space />

        <Row>
          <Col md={8}>
            <Card horizontal>
              <Row between="xs">
                <h2>Android</h2>
                <span
                  style={{ padding: "10px" }}
                  className="fa-brands fa-xl fa-android"
                ></span>
              </Row>
              {androidList.map((android) => (
                <ul>
                  <li>{android.label}</li>
                </ul>
              ))}
            </Card>
          </Col>
          <Col md={4}>
            <SVGs lg type={"android"} />
          </Col>
        </Row>
        <Space />

        <Row>
          <Col md={4}>
            <SVGs lg sm={12} type={"ios"} />
          </Col>
          <Col md={8}>
            <Card horizontal>
              <Row between="xs">
                <h2>iOS</h2>
                <span
                  style={{ padding: "10px" }}
                  className="fa-brands fa-xl fa-apple"
                ></span>
              </Row>
              {iOSList.map((ios) => (
                <ul>
                  <li>{ios.label}</li>
                </ul>
              ))}
            </Card>
          </Col>
        </Row>
      </Grid>
      <Space lg />
      <Footer />
    </>
  );
};

export default Services;
