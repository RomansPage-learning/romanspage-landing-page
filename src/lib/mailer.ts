import nodemailer from "nodemailer";

type ContactNotification = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  submittedAt: Date;
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || !Number.isFinite(port)) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  };
}

export async function sendContactNotification(payload: ContactNotification): Promise<void> {
  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    console.warn("[contact_email_skipped] Missing SMTP configuration.");
    return;
  }

  const to =
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    process.env.SMTP_USER;

  if (!to) {
    console.warn("[contact_email_skipped] Missing recipient email configuration.");
    return;
  }

  const from = process.env.SMTP_FROM || smtpConfig.auth.user;
  const transporter = nodemailer.createTransport(smtpConfig);

  await transporter.sendMail({
    from,
    to,
    subject: `New contact message: ${payload.service}`,
    replyTo: payload.email,
    text: [
      "New contact submission received",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "N/A"}`,
      `Service: ${payload.service}`,
      `Submitted At: ${payload.submittedAt.toISOString()}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <h2>New contact submission received</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Company:</strong> ${payload.company || "N/A"}</p>
      <p><strong>Service:</strong> ${payload.service}</p>
      <p><strong>Submitted At:</strong> ${payload.submittedAt.toISOString()}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br />")}</p>
    `,
  });
}
