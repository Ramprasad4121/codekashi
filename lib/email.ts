import nodemailer from 'nodemailer';

export async function sendNotificationEmail(slug: string, type: string, text: string) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.NOTIFICATION_EMAIL || 'admin@example.com';

  const label = type === 'thought' ? 'Thought / Feedback' : 'Topic Suggestion';
  const subject = `New ${label} on: ${slug}`;
  const body = `
Article: ${slug}
Type: ${label}

Message:
${text}
  `.trim();

  if (host && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: 587,
        secure: false,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Blog Feedback" <${user}>`,
        to: toEmail,
        subject,
        text: body,
      });

      console.log('Notification email sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  } else {
    console.log('--- EMAIL NOTIFICATION LOG ---');
    console.log(`To: ${toEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body:\n${body}`);
    console.log('(Configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local to send real emails)');
  }
}
