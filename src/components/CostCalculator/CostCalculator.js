import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import "../styles/costCalculator.css";
import CostAnalysis from "./CostAnalysis";
import Tabs, { Tab } from "../UIassests/Tabs";
import WebQuestions from "./WebQuestions";
import Footer from "../Footer";
import Space from "../UIassests/Space";
import IosQuestions from "./iOSQuestions";
import AndroidQuestions from "./AndroidQuestions";

const CostCalculator = () => {
  const [totalDays, setTotalDays] = useState(0);
  const [labelType, setLabelType] = useState("Web");
  const [webSelectedAnswers, setWebSelectedAnswers] = useState({});
  const [iosSelectedAnswers, setIosSelectedAnswers] = useState({});
  const [androidSelectedAnswers, setAndroidSelectedAnswers] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleReset = () => {
  //   setTotalDays(0);
  //   const icon = document.querySelector(".fas.fa-arrows-rotate");
  //   if (icon) {
  //     icon.classList.add("rotate-360");
  //   }
  // };

  return (
    <>
      <Grid>
        <Space lg />
        <h1 style={{ textAlign: "center" }}>
          Cost Calculator
          {/* {totalDays > 0 ? (
            <span className="fas fa-arrows-rotate" onClick={handleReset} />
          ) : (
            ""
          )} */}
        </h1>
        <Row>
          <Col md={7} xs={12}>
            <h2>Features</h2>
            <p>Please select the features you want in your app?</p>
            <p>
              All estimates are approximate but should give you a rough idea of
              what it will take to build your app.
            </p>
            <Tabs>
              <Tab label="Web App" onClick={() => setLabelType("Web")}>
                <WebQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                  selectedAnswers={webSelectedAnswers}
                  setSelectedAnswers={setWebSelectedAnswers}
                />
              </Tab>
              <Tab label="iOS App" onClick={() => setLabelType("iOS")}>
                <IosQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                  selectedAnswers={iosSelectedAnswers}
                  setSelectedAnswers={setIosSelectedAnswers}
                />
              </Tab>
              <Tab label="Android App" onClick={() => setLabelType("Android")}>
                <AndroidQuestions
                  totalDays={totalDays}
                  setTotalDays={setTotalDays}
                  selectedAnswers={androidSelectedAnswers}
                  setSelectedAnswers={setAndroidSelectedAnswers}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col md={4} mdOffset={1} xs={12}>
            <CostAnalysis
              labelType={labelType}
              selectedAnswers={webSelectedAnswers}
              totalDays={totalDays}
            />
          </Col>
        </Row>
      </Grid>
      <Space lg />
      <Space lg />
      <Footer />
    </>
  );
};

export default CostCalculator;
