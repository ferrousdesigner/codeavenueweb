import React, { useEffect } from "react";
import "../styles/why_us.css";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import Card from "../UIassests/Card";
import Header from "../UIassests/Header";
import Footer from "../Footer";
import SVGs from "../UIassests/SVG";

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const whyUS = [
    {
      title: "Expertise",
      subTitle:
        " Our team consists of highly skilled professionals with year of experience in developing cutting-edge digital solutions.",
      svg: "customization",
    },
    {
      title: "Custom Solutions",
      subTitle:
        "  We understand that every business is unique. That's why we tailor our solutions to meet your specific needs and requirements.",
      svg: "solution",
    },
    {
      title: "Innovative Approach",
      subTitle:
        "We stay ahead of the curve by embracing the latest technologies and trends to deliver innovative and forward-thinking solutions.",
      svg: "innovative",
    },

    {
      title: "Proven Track Record",
      subTitle:
        "With a portfolio of successful projects and satisfied clients, we have a proven track record of delivering results that exceed expectations.",
      svg: "tracking",
    },

    {
      title: "Customer Satisfaction",
      subTitle:
        " Your satisfaction is our top priority. We go above and beyond to ensure that you are happy with the final product and the overall experience of working with us.",
      svg: "happy",
    },

    {
      title: "Collaborative Process",
      subTitle:
        "We believe in collaboration and transparency. Throughout the development process, we keep you involved and informed every step of the way.",
      svg: "teamwork",
    },
  ];
  return (
    <Grid>
      <div>
        <Space lg />
        <h1 style={{ textAlign: "center" }}>Why Choose Code Avenue?</h1>
        <Space md />
        <Row>
          {whyUS.map((ws) => (
            <Col md={6}>
              <Card horizontal>
                <Row>
                  <Col md={8} xs={10}>
                    <Header> {ws.title}</Header>
                    {ws.subTitle}
                  </Col>
                  <Col md={4} xs={2}>
                    <SVGs className={"Card-SVG"} type={ws.svg} />
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Space lg />
      <Footer />
    </Grid>
  );
};

export default WhyUs;
