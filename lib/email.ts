import nodemailer from 'nodemailer';

export async function sendNotificationEmail(slug: string, feedback: string, topics: string) {
  // If SMTP credentials are provided in .env.local, it will send a real email
  // Otherwise, it just logs to the console to simulate for local development.
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.NOTIFICATION_EMAIL || 'admin@example.com';

  const subject = `New Feedback for Article: ${slug}`;
  const text = `
You received new feedback on your article "${slug}".

Feedback & Suggestions:
${feedback || '(None provided)'}

Future Topics Suggested:
${topics || '(None provided)'}
  `.trim();

  if (host && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Blog Feedback" <${user}>`,
        to: toEmail,
        subject,
        text,
      });
      console.log('Notification email sent successfully via SMTP.');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  } else {
    // Development mode fallback
    console.log('--- EMAIL NOTIFICATION LOG ---');
    console.log(`To: ${toEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body:\n${text}`);
    console.log('------------------------------');
    console.log('To send real emails, configure SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local');
  }
}
