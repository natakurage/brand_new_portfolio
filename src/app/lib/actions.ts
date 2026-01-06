"use server";

import { headers } from "next/headers";
import { createTransport } from "nodemailer";

export async function send_message({
  senderName,
  senderEmail,
  subject,
  message,
  formData
}: {
  senderName: string,
  senderEmail: string,
  subject: string,
  message: string,
  formData: FormData
}) {
  const validation = await verify_turnstile(formData);
  if (!validation.success) {
    return { success: false, message: "Turnstile validation failed." };
  }

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

async function validateTurnstile(token: string, remoteIp: string) {
  const secret = process.env.CF_TURNSTILE_SECRET_KEY;
  if (!secret) {
    return false;
  }
  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);
  formData.append("remoteip", remoteIp);
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    return result;
  } catch {
    console.error("Failed to verify Turnstile token.");
    return false;
  }
}

export async function verify_turnstile(formData: FormData) {
  const reqHeaders = await headers();
  const cfTurnstileToken = formData.get("cf-turnstile-response");
  if (!cfTurnstileToken || typeof cfTurnstileToken !== "string") {
    return { success: false, message: "No Turnstile token provided." };
  }
  const clientIp = reqHeaders.get("CF-Connecting-IP") || reqHeaders.get("x-forwarded-for") || "";
  console.log("Verifying Turnstile token:", cfTurnstileToken, "from IP:", clientIp);
  const validation = await validateTurnstile(cfTurnstileToken || "", clientIp);
  if (validation && validation.success) {
    return { success: true };
  } else {
    return { success: false, message: "Turnstile validation failed." };
  }
}