"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const eventDate = new Date("2025-10-25T20:30:00-03:00")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#781207] to-[#a01810] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-[#f3c374]">Luana</h1>
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-2 text-[#f3c374]/90">Mis 15 Años</h2>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-2">25 de Octubre • 20:30 hs</p>
          <p className="text-lg md:text-xl font-light tracking-wide opacity-90">Una celebración especial</p>
        </div>

        <div className="flex justify-center gap-4 md:gap-8 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-[#f3c374] text-[#781207] rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-2xl md:text-4xl font-bold">{value}</div>
              </div>
              <div className="text-sm md:text-base mt-2 capitalize font-medium">
                {unit === "days" ? "Días" : unit === "hours" ? "Horas" : unit === "minutes" ? "Min" : "Seg"}
              </div>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-[#f3c374] text-[#781207] hover:bg-[#f3c374]/90 font-semibold px-8 py-3 text-lg"
          onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
        >
          Confirmar Asistencia
        </Button>
      </div>
    </section>
  )
}
