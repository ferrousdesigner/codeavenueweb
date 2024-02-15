import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SVGs from "./UIassests/SVG";
import Space from "./UIassests/Space";
import Header from "./UIassests/Header";
import Footer from "./Footer";
import "./styles/contactUs.css";
import Button from "./UIassests/Button";
import wordLogo from "./../Assets/full_logo.png";
import phone1 from "./../Assets/Illustration1.png";
import { isMobile } from "./UIassests/GeneralActions";
import { Img } from "./LandingPage/FirstSection";
import { sendEmail } from "./UIassests/EmailEngine";

const ContactUs = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);
    resetForm();
    const template = "template_6wrraj8";
    const emailData = {
      to_email: values?.email,
      to_name: values?.fullName,
      from_name: "Faraz Khan",
      message: values?.body,
      blind_carbon_copy: "contact@codeavenueindia.com",
    };
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

  const formFields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
    },
  ];

  return (
    <>
      <Grid>
        <Space lg />
        <Row middle="xs" className="left-contact-card">
          <Col xs={12} md={4}>
            {!isMobile && <Img src={phone1} />}
          </Col>
          <Col md={7} mdOffset={1} xs={12}>
            <h1>Contact Us</h1>
            <p>
              We encourage you to reach out to us should you have any inquiries
              or ideas for improvement.
            </p>
            <Space />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid>
                    {formFields.map((field, index) => (
                      <Row className="form-group" key={index}>
                        <label htmlFor={field.name}>{field.label}</label>
                        {field.type === "textarea" ? (
                          <Field
                            as="textarea"
                            name={field.name}
                            rows="5"
                            style={{
                              borderRadius: "10px",
                              border: "1px solid var(--card-color)",
                            }}
                            className={`form-control ${
                              errors[field.name] && touched[field.name]
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                        ) : (
                          <Field
                            type={field.type}
                            name={field.name}
                            style={{
                              borderRadius: "10px",
                              border: "1px solid var(--card-color)",
                            }}
                            className={`form-control ${
                              errors[field.name] && touched[field.name]
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                        )}
                        {errors[field.name] && touched[field.name] && (
                          <div className="invalid-feedback">
                            {errors[field.name]}
                          </div>
                        )}
                      </Row>
                    ))}
                    <Button
                      busy={isSending}
                      fullRound
                      completed={isSent}
                      submit
                      className="btn btn-primary"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Space lg />
        <Space lg />
      </Grid>
      <Footer />
    </>
  );
};

export default ContactUs;
