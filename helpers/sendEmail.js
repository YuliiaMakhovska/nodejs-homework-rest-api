// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "y.makhovska@gmail.com" };
//   await sgMail.send(email);
//   return true;
// };
// module.exports = sendEmail;

const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "y.makhovska@meta.ua",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);
const sendEmail = async (data) => {
  const email = { ...data, from: "y.makhovska@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
// const email = {
//   to: "zupsafikka@gufum.com",
//   from: "y.makhovska@meta.ua",
//   subject: "Test email",
//   html: "<strong>test email</strong>",
// };
// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
// const email = {
//   to: "vutrurarki@gufum.com",
//   from: "y.makhovska@gmail.com",
//   subject: "Test email",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(email)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
