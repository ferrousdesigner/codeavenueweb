import React, { useEffect, useState } from "react";
import Expander from "../Expander/Expander";
import { Grid } from "react-flexbox-grid";
import Checkbox from "../UIassests/Checkbox";
import { isMobile } from "../UIassests/GeneralActions";
import Button from "../UIassests/Button";
import Dialog from "../UIassests/Dialog";
import Space from "../UIassests/Space";

const WebQuestions = ({
  totalDays,
  setTotalDays,
  selectedAnswers,
  setSelectedAnswers,
}) => {
  const [expandedExpander, setExpandedExpander] = useState(null);
  const [answers, setAnswers] = useState(selectedAnswers);
  const [dialog, setDialog] = useState();

  const webQuestions = [
    {
      label: "How big is your app?",
      type: "radio",

      answers: [
        {
          label: "Small",
          days: 15,
        },
        {
          label: "Medium",
          days: 12,
        },
        {
          label: "Large",
          days: 20,
        },
      ],
    },
    {
      label: "What level of UI would you like?",
      type: "radio",

      answers: [
        {
          label: "Basic MVP",
          days: 15,
        },
        {
          label: "Medium",
          days: 12,
        },
        {
          label: "Polished",
          days: 20,
        },
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
        { label: "User Invitation Emails", days: 2 },
        { label: "Multi-tenant Accounts", days: 3 },
        { label: "Subdomains", days: 4 },
        { label: "Custom Domains", days: 4 },
      ],
    },
    {
      label: "User Generated Content",
      answers: [
        { label: "Dashboard", days: 5 },
        { label: "Activity Feed", days: 4 },
        { label: "File Uploading", days: 4 },
        { label: "User Profiles", days: 2 },
        { label: "Transactional Emails", days: 2 },
        { label: "Tags", days: 2 },
        { label: "Ratings or Reviews", days: 5 },
        { label: "Audio/Video Processing", days: 5 },
        { label: "Free Text Searching", days: 2 },
      ],
    },
    {
      label: "Dates & Locations",
      answers: [
        { label: "Calendaring", days: 7 },
        { label: "Display of Map data / Geolocation", days: 3 },
        { label: "Display of custom map markers/regions", days: 3 },
        { label: "Bookings", days: 5 },
      ],
    },
    {
      label: "Social & Engagement",
      answers: [
        { label: "Messaging", days: 6 },
        { label: "Forums or Commenting", days: 5 },
        { label: "Social Sharing", days: 2 },
        { label: "Push to Facebook Open Graph", days: 5 },
      ],
    },
    {
      label: "Billing & eCommerce",
      answers: [
        { label: "Subscription Plans", days: 8 },
        { label: "Payment Processing", days: 5 },
        { label: "Shopping Cart", days: 8 },
        { label: "User Marketplace", days: 12 },
        { label: "Product Management", days: 7 },
      ],
    },
    {
      label: "Admin, Feedback & Analytics",
      answers: [
        { label: "CMS Integration", days: 7 },
        { label: "User Admin Pages", days: 3 },
        { label: "Moderation / Content Approval", days: 4 },
        { label: "Intercom", days: 3 },
        { label: "Usage Analytics", days: 3 },
        { label: "Crash Reporting", days: 1 },
        { label: "Performance Monitoring", days: 1 },
        { label: "Multilingual Support", days: 2 },
      ],
    },
    {
      label: "External APIs and Integrations",
      answers: [
        { label: "Connect to Third-Party Services", days: 6 },
        { label: "API for Integration", days: 8 },
        { label: "SMS Messaging", days: 4 },
        { label: "Phone Number Masking", days: 4 },
      ],
    },
    {
      label: "Security",
      answers: [
        { label: "SSL Certificate based Security", days: 3 },
        { label: "DoS Protection", days: 5 },
        { label: "Two-Factor Authentication", days: 5 },
      ],
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
    setSelectedAnswers({ ...temp });
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

  console.log({ answers: answers, stringOfAnswers: stringOfAnswers });
  return (
    <>
      {webQuestions.map((q) => (
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
      <Dialog open={dialog} onClose={() => setDialog()}>
        <h2>Selected features in your Web app</h2>
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

export default WebQuestions;
