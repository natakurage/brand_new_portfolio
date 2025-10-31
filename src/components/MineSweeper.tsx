"use client";

import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";

function Game(
  { playing, setPlaying, numMines, width, height }
  :
  { playing: boolean; setPlaying: Dispatch<SetStateAction<boolean>>; numMines: number; width: number; height: number }) {
  const [firstClicked, setFirstClicked] = useState(false);
  const [isMine, setIsMine] = useState<boolean[]>([]);
  const [flagged, setFlagged] = useState<boolean[]>([]);
  const [opened, setOpened] = useState<boolean[]>([]);

  const idx = (i: number, j: number) => i * width + j;
  const sub = (index: number) => [Math.floor(index / width), index % width];

  const generate_mines = useCallback((exclude: number) => {
    const indices = Array.from({ length: width * height }, (_, i) => i).filter(
      (i) => i !== exclude
    );
    // shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const mine_indices = indices.slice(0, numMines);
    return Array.from({ length: width * height }, (_, i) =>
      mine_indices.includes(i)
    );
  }, [width, height, numMines]);

  const reset = useCallback(() => {
    setFlagged(new Array(width * height).fill(false));
    setOpened(new Array(width * height).fill(false));
    setFirstClicked(false);
  }, [height, width]);

  const start = useCallback(() => {
    reset();
  }, [reset]);

  const flag = (index: number) => {
    const newFlagged = [...flagged];
    newFlagged[index] = !newFlagged[index];
    setFlagged(newFlagged);
  };

  const open = (index: number) => {
    let newIsMine: boolean[] = [];
    if (!firstClicked) {
      setFirstClicked(true);
      newIsMine = generate_mines(index);
      setIsMine(newIsMine);
    } else {
      newIsMine = isMine;
    }
    const newOpened = [...opened];
    const to_visit = [index];
    if (!flagged[index] && newIsMine[index]) {
      alert("Game Over");
      setPlaying(false);
      return;
    }
    while (to_visit.length !== 0) {
      const curr = to_visit.shift()!;
      if (newIsMine[curr] || flagged[curr] || newOpened[curr]) continue;
      newOpened[curr] = true;
      if (neighbor_count(curr, newIsMine) > 0) continue;
      for (const n of neighbors(curr)) {
        if (!newIsMine[n] && !flagged[n] && !newOpened[n]) {
          to_visit.push(n);
        }
      }
    }
    setOpened(newOpened);
  };

  const neighbors = (index: number) => {
    const [i, j] = sub(index);
    const neighbors = [];
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        if (di === 0 && dj === 0) continue;
        const ii = i + di;
        const jj = j + dj;
        if (ii < 0 || ii >= height || jj < 0 || jj >= width) continue;
        neighbors.push(idx(ii, jj));
      }
    }
    return neighbors;
  };

  const neighbor_count = (index: number, isMine: boolean[]) => {
    return neighbors(index).filter((n) => isMine[n]).length;
  };

  useEffect(() => {
    if (playing) {
      start();
    }
  }, [playing, start]);

  return (
    <>
      <div className="grid gap-1 w-full auto-rows-fr" style={{
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        aspectRatio: `${width} / ${height}`
      }}>
      {
        Array.from({ length: width * height }).map((_, i) => {
          const n = neighbor_count(i, isMine);
          const color_class = opened[i] ? "bg-slate-800" : "bg-slate-200 cursor-pointer";
          return <div
            key={i}
            className={`flex w-full h-full text-center ${color_class}`}
            onClick={() => open(i)}
            onContextMenu={(e) => {e.preventDefault(); flag(i);}}
          >
            <div className="block mx-auto my-auto">
            {
              opened[i] ?
              (isMine[i] ? "💣" : n > 0 && n)
              :
              (flagged[i] && "🚩")
            }
            </div>
          </div>;
        })
      }
      </div>
      <div className="join">
        <button
          className="btn btn-primary join-item"
          onClick={() => reset()}
        >
          Reset
        </button>
        <button
          className="btn btn-secondary join-item"
          onClick={() => setPlaying(!playing)}
        >
          Back to Menu
        </button>
      </div>
    </>
  );
}

enum Difficulity {
  Easy,
  Medium,
  Hard,
}

export function MineSweeper() {
  const [playing, setPlaying] = useState(false);
  const [mineDensity, setMineDensity] = useState(0.2);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const autoSet = (d: Difficulity) => {
    if (d === Difficulity.Easy) {
      setMineDensity(0.1);
      setWidth(10);
      setHeight(10);
    } else if (d === Difficulity.Medium) {
      setMineDensity(0.2);
      setWidth(16);
      setHeight(16);
    } else if (d === Difficulity.Hard) {
      setMineDensity(0.25);
      setWidth(20);
      setHeight(20);
    }
  };

  const numMines = Math.floor(width * height * mineDensity);

  return (
    <div className="not-prose">
    {
      playing ? (
        <Game playing setPlaying={setPlaying} numMines={numMines} width={width} height={height} />
      ) : (
        <fieldset className="fieldset mx-auto w-1/2 bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Page details</legend>
          
          <label className="fieldset-label">Width: {width}</label>
          <input
            type="range"
            className="range"
            placeholder="10"
            value={width}
            min={2}
            max={20}
            onChange={(e) => setWidth(parseInt(e.target.value))}
          />
          
          <label className="fieldset-label">Height: {height}</label>
          <input
            type="range"
            className="range"
            placeholder="10"
            value={height}
            min={2}
            max={20}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
          
          <label className="fieldset-label">Number of mines: {numMines} ({Math.floor(mineDensity * 100)}%)</label>
          <input
            type="range"
            className="range"
            placeholder="20"
            value={mineDensity * 100}
            min={0}
            max={100}
            onChange={(e) => setMineDensity(parseFloat(e.target.value) / 100)}
          />
          <div className="flex flex-row">
            <div className="join">
              <button
                className="btn btn-success join-item"
                onClick={() => {autoSet(Difficulity.Easy);}}
              >
                Easy
              </button>
              <button
                className="btn btn-warning join-item"
                onClick={() => {autoSet(Difficulity.Medium);}}
              >
                Medium
              </button>
              <button
                className="btn btn-error join-item"
                onClick={() => {autoSet(Difficulity.Hard);}}
              >
                Hard
              </button>
            </div>
            <button
              className="btn btn-primary join-item"
              onClick={() => {setPlaying(true);}}
            >
              Start
            </button>
          </div>
        </fieldset>
      )
    }
    </div>
  );
}