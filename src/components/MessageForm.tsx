"use client";

import { useState } from 'react';
import Script from 'next/script';
import { send_message, verify_turnstile } from '@/app/lib/actions';

export default function MessageForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [modalText, setModalText] = useState<string>("default");
  const [modalClass, setModalClass] = useState<string>("alert-info");
  const [modalShowing, setModalShowing] = useState<boolean>(false);

  const showModal = (text: string, duration: number, type: string) => {
    setModalText(text);
    setModalClass(type);
    setModalShowing(true);
    setTimeout(() => {
      setModalShowing(false);
    }, duration);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setTitle("");
    setContent("");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const validation = await verify_turnstile(formData);
    if (!validation.success) {
      showModal("Turnstile検証に失敗しました。", 5000, "alert-error");
      return;
    }
    const result = await send_message({
      senderName: name,
      senderEmail: email,
      subject: title,
      message: content
    });
    if (!result.success) {
      showModal(`送信に失敗しました。エラー: ${result.message}`, 5000, "alert-error");
      return;
    }
    showModal("送信しました。", 5000, "alert-success");
    resetForm();
  };

  return (
    <>
      <form
        target="hidden-iframe"
        className="space-y-3"
        onSubmit={onSubmit}
      >
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></Script>
        <fieldset className="fieldset w-full">
          <label htmlFor="form-name" className="label">お名前</label>
          <input
            id="form-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input w-full"
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <label htmlFor="form-email" className="label">メールアドレス</label>
          <input
            id="form-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input w-full"
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <label htmlFor="form-title" className="label">件名</label>
          <input
            id="form-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input w-full"
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <label htmlFor="form-content" className="label">内容</label>
          <textarea
            id="form-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={11}
            required
            className="textarea w-full"
          />
        </fieldset>
        <div
          suppressHydrationWarning
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY}
        />
        <div>
          <input type="submit" className="btn" />
        </div>
      </form>
      <iframe name="hidden-iframe" style={{display: "none"}}></iframe>
      {
        modalShowing &&
        <div className="toast">
          <div className={`alert ${modalClass}`}>
            {modalText}
          </div>
        </div>
      }
    </>
  );
}
