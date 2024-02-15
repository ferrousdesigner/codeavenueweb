import emailjs from "@emailjs/browser";

const emailServieID = "service_zvycn2h";
const emailTemplateID = "template_mxg9dul";
const emailPublicID = "-IjAyIARwHe2k9fyF";

export const sendEmail = (data, template) => {
  return emailjs
    .send(emailServieID, template || emailTemplateID, data, emailPublicID)
    .then(
      (result) => {
        console.log(result.text);
        return result;
      },
      (error) => {
        console.error("Error sending email:", error);
        throw error;
      }
    );
};
