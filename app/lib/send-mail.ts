"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.SERVER_HOST,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.My_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Ignore certificate errors
  },
});

const sendEmail = async (from: string, subject: string, html: string) => {
  const mailOptions = {
    from,
    to: process.env.MY_EMAIL,
    subject,
    html,
  };

  try {
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
