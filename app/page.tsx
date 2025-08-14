"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import DressCodeSection from "@/components/dress-code-section"
import LocationSection from "@/components/location-section"
import MenuSection from "@/components/menu-section"
import GiftsSection from "@/components/gifts-section"
import RSVPSection from "@/components/rsvp-section"
import ThankYouSection from "@/components/thank-you-section"
import { MusicControl } from "@/components/music-control"
import { Heart } from "lucide-react"

export default function QuinceaneraCard() {
  const [showInvitation, setShowInvitation] = useState(false)

  const handleOpenInvitation = async () => {
    setShowInvitation(true)
    setTimeout(async () => {
      const audio = document.getElementById("background-music") as HTMLAudioElement
      if (audio) {
        try {
          await audio.play()
        } catch (error) {
          console.error("Error playing audio:", error)
        }
      }
    }, 500)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <audio id="background-music" loop preload="auto" className="hidden">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quincea%C3%B1era-song.mp3-KcXeD3tFOxOtmFtGz4MEt6NNqX88k5.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      {/* Preview Screen */}
      {!showInvitation && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#f3c374]/20 via-white to-[#781207]/10">
          <div className="absolute inset-0 z-[-1] opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-[#f3c374] to-[#781207]" />
          </div>

          <div className="max-w-md mx-auto space-y-6">
            <div className="flex justify-center mb-4">
              <Heart className="w-16 h-16 text-[#781207] fill-current" />
            </div>

            <h1 className="text-4xl font-serif text-[#781207] mb-2">¡Estás invitado!</h1>
            <div className="space-y-2">
              <p className="text-2xl font-serif text-[#781207]">Mis XV Años</p>
              <p className="text-xl text-[#781207]/80 font-medium">Luana</p>
              <p className="text-lg text-[#781207]/70">25 de Octubre • 20:30 hs</p>
            </div>

            <button
              onClick={handleOpenInvitation}
              className="px-8 py-4 bg-gradient-to-r from-[#781207] to-[#781207]/90 text-white rounded-lg shadow-lg hover:from-[#781207]/90 hover:to-[#781207] transition-all duration-300 font-medium text-lg"
            >
              Abrir Invitación
            </button>

            <p className="text-sm text-[#781207]/60 mt-4">Toca para abrir y escuchar música</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${showInvitation ? "opacity-100" : "opacity-0"}`}>
        <MusicControl />
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
          <HeroSection />
          <DressCodeSection />
          <LocationSection />
          <MenuSection />
          <GiftsSection />
          <RSVPSection />
          <ThankYouSection />
        </div>
      </div>
    </div>
  )
}
