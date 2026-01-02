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
        <label className="form-control w-full">
          <div className="label">
            <div className="label-text">お名前</div>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <div className="label-text">メールアドレス</div>
          </div>
          <input
            id="form-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <div className="label-text">件名</div>
          </div>
          <input
            id="form-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <div className="label-text">内容</div>
          </div>
          <textarea
            id="form-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={11}
            required
            className="textarea w-full"
          />
        </label>
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
