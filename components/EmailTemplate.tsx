import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  subject,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <h2>Email : {email}</h2>
    <h3>Subject : {subject}</h3>
    <p>{message}</p>
  </div>
);
