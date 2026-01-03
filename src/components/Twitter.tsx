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
      <fieldset className="fieldset">
        <label htmlFor="form-word" className="label">検索ワード</label>
        <input
          id="form-word"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
          className="input w-full"
        />
      </fieldset>
      <fieldset className="fieldset">
        <label htmlFor="form-tab" className="label">タブ</label>
        <select
          id="form-tab"
          className="select w-full"
          value={tab}
          onChange={(e) => setTab(e.target.value as TabName)}
        >
          <option value={undefined}>話題</option>
          <option value="live">Live</option>
          <option value="user">ユーザー</option>
          <option value="media">メディア</option>
          <option value="list">リスト</option>
        </select>
      </fieldset>
      <div className="collapse collapse-arrow">
        <input type="checkbox" id="form-advanced-search" />
        <div className="collapse-title text-xl">高度な検索</div>
        <div className="collapse-content px-0">
          <fieldset className="fieldset">
            <label htmlFor="form-since" className="label">この日以降</label>
            <input
              id="form-since"
              type="date"
              value={since}
              onChange={(e) => setSince(e.target.value)}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="form-until" className="label">この日以前</label>
            <input
              id="form-until"
              type="date"
              value={until}
              onChange={(e) => setUntil(e.target.value)}
              className="input w-full"
            />
          </fieldset>
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

