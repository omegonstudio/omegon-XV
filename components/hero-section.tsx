"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/marble-background.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-white/20" />

      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 opacity-70 hidden md:block">
        <Image
          src="/images/floral-decoration-left.png"
          alt="Decorative red roses left"
          width={400}
          height={400}
          className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 opacity-80">
        <Image
          src="/images/floral-decoration.png"
          alt="Decorative red roses"
          width={500}
          height={500}
          className="w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-handwriting font-bold mb-4 text-[#781207]">Luana</h1>
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-2 text-[#781207]/90">Mis 15 Años</h2>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-2 text-[#781207]/80">
            25 de Octubre • 20:30 hs
          </p>
          <p className="text-lg md:text-xl font-light tracking-wide text-[#781207]/70">Una celebración especial</p>
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
          className="bg-[#781207] text-white hover:bg-[#781207]/90 font-semibold px-8 py-3 text-lg"
          onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
        >
          Confirmar Asistencia
        </Button>
      </div>
    </section>
  )
}
