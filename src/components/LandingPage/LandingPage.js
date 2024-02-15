import React from "react";
import Space from "../UIassests/Space";
import Footer from "../Footer";
import "../styles/landingPage.css";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Prices from "./Prices";
import { isMobile } from "../UIassests/GeneralActions";

function LandingPage() {
  return (
    <>
      <FirstSection />
      {isMobile ? (
        ""
      ) : (
        <>
          <Space lg />
          <Space lg />
        </>
      )}
      <SecondSection />
      {isMobile ? (
        ""
      ) : (
        <>
          <Space lg />
          <Space lg />
        </>
      )}
      <ThirdSection />
      {isMobile ? (
        ""
      ) : (
        <>
          <Space lg />
          <Space lg />
        </>
      )}
      <Prices />
      <Space lg />
      <Footer />
    </>
  );
}

export default LandingPage;
