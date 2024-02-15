import React, { useState } from "react";
import { Grid, Row } from "react-flexbox-grid";
import Button from "../UIassests/Button";
import { sendEmail } from "../UIassests/EmailEngine";
import Space from "../UIassests/Space";
import "../styles/costAnalysis.css";

const formattedNumber = (number) =>
  number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
const CostAnalysis = ({
  totalDays,
  setTotalDays,
  labelType,
  selectedAnswers,
}) => {
  const [emailValue, setEmailValue] = useState("");
  const [name, setName] = useState("");

  // const [emailValid, setEmailValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleClick = () => {
    let body = "";
    Object.entries(selectedAnswers).forEach(([question, answers]) => {
      body += `${question}\n`;
      answers.forEach((answer) => {
        body += `${answer.label} - ${answer.days} days\n`;
      });
      body += "\n";
      body += "Total Tentative Price: " + formattedNumber(totalDays * 8 * 22);
      body += "\n";
    });

    const emailData = {
      to_email: emailValue,
      to_name: name,
      from_name: "Code Avenue",
      message: body,
      blind_carbon_copy: "contact@codeavenueindia.com",
    };
    if (!emailData) {
      return alert("Please enter email");
    }
    if (!name) {
      return alert("Please enter name");
    }
    const template = "template_mxg9dul";

    sendEmail(emailData, template)
      .then(() => {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSending(false);
      });
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (e.target.name === "email") {
      setEmailValue(val);
    } else {
      setName(val);
    }

    // const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // setEmailValid(isValid);
  };
  console.log("Email Value", emailValue);

  return (
    <>
      <Grid>
        <div style={{ position: "sticky" }}>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            Cost Analysis{" "}
          </h2>
          <Row between="xs">
            <p>App type</p>
            <h3>{labelType}</h3>
          </Row>
          <Space />
          <Row between="xs">
            <p>Total days</p>
            <h3>{totalDays}</h3>
          </Row>{" "}
          <Space />
          <Row between="xs">
            <p>Working hours per day</p>
            <h3>8</h3>
          </Row>{" "}
          <Space />
          <Row
            className="border-bottom"
            style={{ paddingBottom: "1rem" }}
            between="xs"
          >
            <p>Per hours price</p>
            <h3>$22</h3>
          </Row>
          <Space />
          <Row between="xs">
            <h3>Total Tentative Price</h3>
            <h3>{formattedNumber(totalDays * 8 * 22)}</h3>
          </Row>
          <Space />
          <input
            className="mail-input"
            type="email"
            placeholder="Enter your email"
            value={emailValue}
            name="email"
            onChange={handleInputChange}
          />
          <input
            className="mail-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
          />
          <Button
            round
            disabled={!Object.entries(selectedAnswers).length > 0}
            style={{ width: "100%", marginTop: "5px" }}
            onClick={handleClick}
          >
            {isSending ? "Sending..." : `Send ${labelType} Estimate`}
          </Button>
          {isSent && (
            <Row>
              <p style={{ color: "green", marginTop: "-5%" }}>
                Estimate sent successfully!
              </p>
            </Row>
          )}
          <Row>
            <p style={{ fontWeight: "lighter", fontSize: "0.8rem" }}>
              <strong>Please note : </strong> all cost estimates are intended to
              be indicative of development costs and timescales only and are
              exclusive of all hosting costs, paid services or purchased assets
              of any kind. All prices are in USD and inclusive of sales tax.
            </p>
          </Row>
        </div>
      </Grid>
    </>
  );
};

export default CostAnalysis;
