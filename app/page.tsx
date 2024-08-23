"use client"

import JsClock from "@/components/clocks/JsClock"
import { useEffect, useState } from "react"

export default function Home() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex max-h-screen min-h-screen flex-col items-center justify-center p-24">
      {/* <div className="flex h-screen items-center justify-center">
        <div className="group relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <button className="relative rounded-lg bg-black px-7 py-4 text-white">
            Follow me on LogRocket
          </button>
        </div>
      </div> */}
      {/* <h1 className="text-5xl bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
        Code Clock
      </h1> */}
      <JsClock time={time} />
      <div></div>
    </main>
  )
}
