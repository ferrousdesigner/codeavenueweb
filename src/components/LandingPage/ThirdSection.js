import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Space from "../UIassests/Space";
import human1 from "../../Assets/humaaans/sitting-8.png";
import human2 from "../../Assets/humaaans/standing-2.png";
import human3 from "../../Assets/humaaans/standing-3.png";
import human4 from "../../Assets/humaaans/standing-10.png";
import human5 from "../../Assets/humaaans/standing-16.png";
import human6 from "../../Assets/humaaans/standing-22.png";
import Card from "../UIassests/Card";
import { isMobile } from "../UIassests/GeneralActions";

const paraStyle = {
  fontSize: "15px",
  textAlign: "left",
};

const ThirdSection = () => {
  return (
    <>
      <Grid id="why_us">
        <div style={{ textAlign: "center" }}>
          <h1>Why choose us?</h1>
          <p>There are few reasons you to choose us which are listed below</p>
        </div>
        {isMobile ? (
          ""
        ) : (
          <>
            <Space lg />
            <Space lg />
          </>
        )}
        <Row center="xs">
          <Col md={4} xs={12}>
            <Card>
              <img src={human1} alt="" className="humans-img-card" />

              <p style={paraStyle}>
                <h3>Expertise and Experience</h3>
                Benefit from our team's extensive expertise and years of
                experience in web and mobile app development. We bring a wealth
                of knowledge to the table, ensuring your project is in capable
                hands.
              </p>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            {" "}
            <Card withBorder>
              <img src={human2} alt="" className="humans-img-card" />

              <p style={paraStyle}>
                <h3>Innovative Solutions</h3>
                Work with a team that thrives on innovation. We don't just
                deliver solutions; we provide innovative approaches that set
                your project apart, ensuring it stands out in today's
                competitive digital landscape.
              </p>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            {" "}
            <Card>
              <img src={human3} alt="" className="humans-img-card" />

              <p style={paraStyle}>
                <h3>Client-Centric Approach</h3>
                Experience a service tailored to your needs. Our client-centric
                approach means open communication, a keen understanding of your
                goals, and a commitment to delivering solutions that align with
                your vision.
              </p>
            </Card>
          </Col>
        </Row>
        {isMobile ? (
          ""
        ) : (
          <>
            <Space lg />
            <Space lg />
          </>
        )}
        <Row center="xs">
          <Col md={4} xs={12}>
            {" "}
            <Card withBorder>
              <img src={human4} alt="" className="humans-img-card" />

              <p style={paraStyle}>
                <h3>Quality Assurance</h3>
                Rest easy knowing that quality is at the forefront of our work.
                Rigorous testing and quality assurance processes are embedded in
                our development cycle, ensuring a seamless, bug-free experience
                for your users.
              </p>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            {" "}
            <Card>
              <img src={human5} alt="" className="humans-img-card" />

              <p style={paraStyle}>
                <h3>Timely Delivery</h3>
                We value your time as much as you do. With a commitment to
                timely delivery, you can trust us to meet deadlines and
                milestones, ensuring your project progresses smoothly and
                efficiently.
              </p>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card withBorder>
              <img src={human6} alt="" className="humans-img-card" />

              <p style={paraStyle}>
                <h3>Continuous Support</h3>
                Our relationship doesn't end with project delivery. Enjoy
                continuous support and maintenance services, ensuring your
                application remains up-to-date, secure, and ready to adapt to
                future technological advancements.
              </p>
            </Card>{" "}
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default ThirdSection;
