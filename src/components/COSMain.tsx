"use client"

import { useRef, useState } from "react"

type sound = "sine" | "square" | "sawtooth" | "triangle"
const maxInterval = 2000
const maxFreq = 500

export default function COSMain() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [sound, setSound] = useState<sound>("sine")
  
  const ctx = useRef<AudioContext>()
  const osc = useRef<OscillatorNode>()
  const timerId = useRef<NodeJS.Timeout>()

  if (typeof window !== "undefined" && !ctx.current) {
    ctx.current = new AudioContext()
  }

  const play = () => {
    if (!isPlaying && ctx.current != null) {
      osc.current = ctx.current.createOscillator();
      osc.current.connect(ctx.current.destination)
      osc.current.type = sound
      changeFreq(maxFreq)
      osc.current.start(0);
      RepeatChangeFreq()
      setIsPlaying(true)
    } else {
      osc.current?.stop()
      clearTimeout(timerId.current)
      setIsPlaying(false)
    }
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sound = e.target.value as sound
    if (osc.current) {
      osc.current.type = sound
    }
    setSound(sound)
  }

  const changeFreq = (range: number) => {
    if (osc.current) {
      osc.current.frequency.value = Math.random() * range
    }
  }

  const RepeatChangeFreq = () => {
    const time = Math.random() * maxInterval;
    timerId.current = setTimeout(() => {
      changeFreq(maxFreq);
      RepeatChangeFreq();
    }, time)
  }

  return (
    <div className="max-w-lg mx-auto text-center">
      <button className="btn btn-primary" onClick={play}>
        完全にオリジナルな音楽を{ isPlaying ? "停止": "再生" }
      </button>
      <label className="form-control w-full">
      <div className="label">
        <span className="label-text">音色を変更：</span>
      </div>
      <select
        value={sound}
        onChange={(e) => handleSelect(e)}
        className="select select-bordered"
      >
        {
          ["sine", "square", "sawtooth", "triangle"].map((sound) => (
            <option
              key={sound}
              value={sound}
            >
              { sound }
            </option>
          ))
        }
      </select>
      </label>
    </div>
  )
}