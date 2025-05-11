import * as React from "react";

interface WelcomeEmailProps {
  name: string;
}

export function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", color: "#333" }}>
      <h1>Welcome, {name}!</h1>
      <p>Thank you for joining our app. We're excited to have you on board.</p>
      <p>— The Team</p>
    </div>
  );
}