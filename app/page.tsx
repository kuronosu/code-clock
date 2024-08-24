"use client"

import JsClock from "@/components/JsClock"
import PyClock from "@/components/PyClock"
import { useEffect, useState } from "react"

const clocks = {
  js: { name: "JavaScript", Component: JsClock },
  py: { name: "Python", Component: PyClock },
} as const
type Clock = (typeof clocks)[keyof typeof clocks]

type Clocks = keyof typeof clocks

export default function Home() {
  const [time, setTime] = useState(new Date())
  const [Clock, setClock] = useState<Clock>(clocks.js)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const onChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setClock(clocks[e.currentTarget.value as Clocks])
  }

  return (
    <main className="flex max-h-screen min-h-screen flex-col items-center p-24">
      <div className="flex flex-wrap gap-12">
        {Object.keys(clocks).map((key) => (
          <div key={key} className="group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <button
              value={key}
              onClick={onChange}
              className="relative rounded-lg bg-black px-7 py-4 text-white"
            >
              {clocks[key as Clocks].name}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-1 w-full justify-center items-center">
        <Clock.Component time={time} />
      </div>
      <div></div>
    </main>
  )
}
