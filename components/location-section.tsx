"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function LocationSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#781207]/5 to-[#f3c374]/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-[#781207] mb-8">Ubicación</h2>

        <Card className="p-8 border-[#f3c374] border-2">
          <CardContent className="p-0">
            <MapPin className="w-12 h-12 text-[#781207] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-[#781207] mb-4">Salón del Abuelo</h3>
            <p className="text-lg text-gray-700 mb-6">Comodoro Rivadavia, km 8</p>

            <div className="mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.234567890123!2d-67.5!3d-45.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ4JzAwLjAiUyA2N8KwMzAnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            <Button
              className="bg-[#781207] hover:bg-[#781207]/90 text-white"
              onClick={() =>
                window.open("https://maps.google.com/?q=Comodoro+Rivadavia+km+8+Salon+del+Abuelo", "_blank")
              }
            >
              <MapPin className="w-4 h-4 mr-2" />
              Abrir en Google Maps
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
