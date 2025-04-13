"use client";

import { useState } from "react";

type TabName = "live" | "user" | "media" | "list"

export function TwitterSearch() {
  const [word, setWord] = useState("");
  const [tab, setTab] = useState<TabName | undefined>("live");
  const [since, setSince] = useState("");
  const [until, setUntil] = useState("");

  const go = (word: string, tab: TabName | undefined) => {
    if (word === "") return;
    // create url with query
    const url = new URL("https://x.com/search");
    const query = word;
    word += since ? ` since:${since}` : "";
    word += until ? ` until:${until}` : "";
    url.searchParams.set("q", query);
    if (tab) {
      url.searchParams.set("f", tab);
    }
    // push to url with new tab 
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      className="max-w-xl mx-auto space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        go(word, tab);
      }}
    >
      <label className="form-control">
        <div className="label">
          <div className="label-text">検索ワード</div>
        </div>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
          className="input input-bordered"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <div className="label-text">タブ</div>
        </div>
        <select
          className="select select-bordered"
          value={tab}
          onChange={(e) => setTab(e.target.value as TabName)}
        >
          <option value={undefined}>話題</option>
          <option value="live">Live</option>
          <option value="user">ユーザー</option>
          <option value="media">メディア</option>
          <option value="list">リスト</option>
        </select>
      </label>
      <div className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title text-xl">高度な検索</div>
        <div className="collapse-content px-0">
          <label className="form-control">
            <div className="label">
              <div className="label-text">この日以降</div>
            </div>
            <input
              type="date"
              value={since}
              onChange={(e) => setSince(e.target.value)}
              className="input input-bordered"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <div className="label-text">この日以前</div>
            </div>
            <input
              type="date"
              value={until}
              onChange={(e) => setUntil(e.target.value)}
              className="input input-bordered"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-row">
        <input
          type="submit"
          value="検索"
          className="btn btn-primary flex-1"
        />
        <button
          type="button"
          onClick={() => {
            setWord("");
            setSince("");
            setUntil("");
          }}
          className="btn btn-error"
        >
          リセット
        </button>
      </div>
    </form>
  );
}

