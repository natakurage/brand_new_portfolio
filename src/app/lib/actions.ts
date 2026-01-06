"use server";

import { createTransport } from "nodemailer";

export async function send_message({
  senderName,
  senderEmail,
  subject,
  message
}: {
  senderName: string,
  senderEmail: string,
  subject: string,
  message: string,
}) {
  const user = process.env.CONTACT_EMAIL_SMTP_USER;
  const pass = process.env.CONTACT_EMAIL_SMTP_PASS;
  const host = process.env.CONTACT_EMAIL_SMTP_HOST;
  const port = process.env.CONTACT_EMAIL_SMTP_PORT;
  const secure = process.env.CONTACT_EMAIL_SMTP_SECURE;
  const fromUser = process.env.CONTACT_EMAIL_FROM_USER;
  const toUser = process.env.CONTACT_EMAIL_TO_USER;

  if (!host || !port || !secure || !user || !pass || !fromUser || !toUser) {
    return { success: false, message: "SMTP configuration is missing." };
  }

  const transporter = createTransport({
    host,
    port: Number(port),
    secure: secure === "true",
    auth: {
      user: user,
      pass: pass,
    },
  });
  
  const toMeEmailOptions = {
    from: fromUser,
    to: toUser,
    subject: `【問い合わせ通知】${senderName} - ${subject}`,
    text: `名前: ${senderName}\n\nメールアドレス: ${senderEmail}\n件名: ${subject}\nメッセージ: ${message}`
  };

  const toSenderEmailOptions = {
    from: fromUser,
    to: senderEmail,
    subject: "【自動返信】お問い合わせありがとうございます",
    text: `${senderName} 様\n\nこの度はお問い合わせいただき、誠にありがとうございます。\n以下の内容でお問い合わせを受け付けました。\n\n件名: ${subject}\nメッセージ: ${message}\n\n内容を確認後、折り返しご連絡いたしますので、今しばらくお待ちください。\n\nよろしくお願いいたします。\n\n※本メールは自動送信されています。`,
  };

  try {
    await Promise.all([
      transporter.sendMail(toMeEmailOptions),
      transporter.sendMail(toSenderEmailOptions),
    ]);
  } catch (error) {
    return { success: false, message: `Failed to send message: ${error}` };
  }

  return { success: true, message: `Message sent successfully.` };
}