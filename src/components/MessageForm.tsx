"use client";

import { BaseSyntheticEvent, useState } from 'react';

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

  const onSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();
    try {
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSe2kcQ3DWJSoYURIS9ARTUhymadXiJoNimGJQ7jGyCyGu76gQ/formResponse", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          "entry.98194133": name,
          "emailAddress": email,
          "entry.823789016": title,
          "entry.1870725190": content
        })
      });
    } catch {
      showModal("送信に失敗しました。", 5000, "alert-error");
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
