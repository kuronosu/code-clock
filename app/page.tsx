"use client"

import JsClock from "@/components/JsClock"
import PyClock from "@/components/PyClock"
import { useEffect, useState } from "react"

type Clock = ({ time }: Readonly<{ time: Date }>) => JSX.Element

const clocks = {
  js: JsClock,
  py: PyClock,
} as const

type Clocks = keyof typeof clocks

export default function Home() {
  const [time, setTime] = useState(new Date())
  const [clock, setClock] = useState<keyof typeof clocks>("py")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const onChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setClock(e.currentTarget.value as Clocks)
  }

  const Clock = clocks[clock]

  return (
    <main className="flex max-h-screen min-h-screen flex-col items-center p-24">
      <div className="flex flex-wrap gap-4">
        <button value="js" onClick={onChange}>
          JavaScript
        </button>
        <button value="py" onClick={onChange}>
          Python
        </button>
      </div>
      <div className="flex flex-1 w-full justify-center items-center">
        <Clock time={time} />
      </div>
      <div></div>
    </main>
  )
}
