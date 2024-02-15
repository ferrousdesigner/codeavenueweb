import React, { useEffect, useState } from "react";
import Expander from "../Expander/Expander";
import { isMobile } from "../UIassests/GeneralActions";
import { Grid } from "react-flexbox-grid";
import Checkbox from "../UIassests/Checkbox";
import Space from "../UIassests/Space";
import Button from "../UIassests/Button";
import Dialog from "../UIassests/Dialog";

const IosQuestions = ({ totalDays, setTotalDays }) => {
  const [expandedExpander, setExpandedExpander] = useState(null);
  const [answers, setAnswers] = useState({});
  const [dialog, setDialog] = useState();

  const iOSQuestions = [
    {
      label: "How big is your app?",
      type: "radio",
      answers: [
        { label: "Small", days: 10 },
        { label: "Medium", days: 30 },
        { label: "Large", days: 50 },
      ],
    },
    {
      label: "What level of UI would you like?",
      type: "radio",
      answers: [
        { label: "MVP", days: 30 },
        { label: "Basic", days: 50 },
        { label: "Polished", days: 70 },
      ],
    },
    {
      label: "Users & Accounts",
      answers: [
        { label: "Email / Password Sign Up", days: 1 },
        { label: "Facebook Sign Up", days: 2 },
        { label: "Twitter Sign Up", days: 2 },
        { label: "Google Sign Up", days: 2 },
        { label: "LinkedIn Sign Up", days: 2 },
        { label: "Github Sign Up", days: 2 },
      ],
    },
    {
      label: "User Generated Content",
      answers: [
        { label: "Activity Feed", days: 4 },
        { label: "Media Uploading", days: 4 },
        { label: "User Profiles", days: 2 },
        { label: "Tags", days: 2 },
        { label: "Ratings or reviews", days: 5 },
        { label: "Media Manipulation", days: 7 },
        { label: "Searching", days: 3 },
      ],
    },
    {
      label: "Mobile specific features",
      answers: [
        { label: "App Icon Design", days: 7 },
        { label: "Cloud Syncing", days: 5 },
        { label: "Device Sensor Data", days: 5 },
        { label: "Barcodes or QR Codes", days: 2 },
        { label: "Health Data", days: 4 },
        { label: "Apple Watch", days: 7 },
      ],
    },
    {
      label: "Dates & Locations",
      answers: [
        { label: "Calendaring", days: 6 },
        { label: "Display of Map data / Geolocation", days: 3 },
        { label: "Display of custom map markers/regions", days: 3 },
        { label: "Bookings", days: 5 },
      ],
    },
    {
      label: "Social & Engagement",
      answers: [
        { label: "Messaging", days: 5 },
        { label: "Forums or commenting", days: 5 },
        { label: "Social Sharing", days: 1 },
        { label: "Push to Facebook Open Graph", days: 3 },
        { label: "Push Notifications", days: 3 },
      ],
    },
    {
      label: "Billing & eCommerce",
      answers: [
        { label: "Shopping Cart", days: 5 },
        { label: "In-App Purchasing", days: 5 },
        { label: "Payment Information Collection", days: 3 },
        { label: "Payment processing", days: 5 },
      ],
    },
    {
      label: "Admin, Feedback & Analytics",
      answers: [
        { label: "Intercom", days: 3 },
        { label: "Usage Analytics", days: 3 },
        { label: "Crash Reporting", days: 1 },
        { label: "Multilingual Support", days: 4 },
      ],
    },
    {
      label: "External APIs and Integrations",
      answers: [
        { label: "Connect to one or more third party services", days: 3 },
        { label: "SMS Messaging", days: 4 },
        { label: "Phone Number Masking", days: 4 },
      ],
    },
    {
      label: "Security",
      answers: [{ label: "Two Factor Authentication", days: 5 }],
    },
    {
      label: "App Specific Development",
      answers: [
        { label: "App Specific Development", days: 1 },
        { label: "Project Manager", days: 1 },
      ],
    },
  ];

  const handleExpanderToggle = (expanderTitle) => {
    setExpandedExpander((prevExpanded) =>
      prevExpanded === expanderTitle ? null : expanderTitle
    );
  };

  const addOnClick = (question, answer, isMulti) => {
    let temp = { ...answers };
    console.log("temp[question]", temp[question]);
    temp[question] = isMulti
      ? temp[question]
        ? temp[question]?.some((a) => a.label === answer.label)
          ? temp[question]
            ? [...temp[question]?.filter((a) => a.label !== answer.label)]
            : []
          : [...temp[question], answer]
        : [answer]
      : [answer];
    console.log(isMulti, temp);
    setAnswers({ ...temp });
  };

  const stringOfAnswers = JSON.stringify(answers);
  useEffect(() => {
    let a = Object.values(answers);
    if (a.length > 0) {
      a = a.flat(); // a = a.map(b => b.days)
      a = a.map((a) => a.days);

      a = a.length > 0 ? a.reduce((a, b) => a + b) : 0;

      console.log("test", a);
      setTotalDays(a);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringOfAnswers]);

  return (
    <>
      {iOSQuestions.map((q) => (
        <div style={{ maxWidth: isMobile ? "" : "80%" }}>
          <Expander
            subTitle={q.label}
            expanded={expandedExpander === q.label}
            onToggle={() => handleExpanderToggle(q.label)}
          >
            {q.answers.map((a) => (
              <>
                <Grid key={a.label}>
                  <Checkbox
                    title={a.label}
                    subtitle={a.days}
                    onClick={() => {
                      addOnClick(q.label, a, q.type !== "radio");
                    }}
                    isChecked={
                      answers[q.label]?.some((ans) => ans.label === a.label) ||
                      false
                    }
                    checkCircle
                    isRadio={q.type === "radio"}
                  />
                </Grid>
              </>
            ))}
          </Expander>
        </div>
      ))}
      <Space lg />
      <Button
        round
        onClick={() => setDialog(true)}
        disabled={!Object.entries(answers).length > 0}
      >
        Review Your Selection
      </Button>
      <Dialog right open={dialog} onClose={() => setDialog()}>
        <h2>Selected features in your iOS app</h2>
        <Space />
        {Object.entries(answers).map(([question, selectedAnswers]) => (
          <div key={question}>
            <h3>{question}</h3>
            <ul>
              {selectedAnswers.map((selectedAnswer) => (
                <li key={selectedAnswer.label}>
                  <p>
                    {selectedAnswer.label} - {selectedAnswer.days} days
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Dialog>
    </>
  );
};

export default IosQuestions;
