"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      try {
        if (isPlaying) {
          audio.pause()
        } else {
          await audio.play()
        }
      } catch (error) {
        console.error("Error controlling audio:", error)
      }
    }
  }

  useEffect(() => {
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      const handleEnded = () => setIsPlaying(false)

      audio.addEventListener("play", handlePlay)
      audio.addEventListener("pause", handlePause)
      audio.addEventListener("ended", handleEnded)

      return () => {
        audio.removeEventListener("play", handlePlay)
        audio.removeEventListener("pause", handlePause)
        audio.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className="bg-white/80 backdrop-blur-sm border-[#781207]/20 hover:bg-white/90 text-[#781207]"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
    </div>
  )
}
