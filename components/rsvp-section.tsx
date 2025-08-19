"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Send } from "lucide-react"

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    confirmados: "1", // renamed from guests to confirmados
    dietaryRestrictions: "",
    message: "",
    transport: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const endpointData = {
        "Nombre Completo": formData.name,
        Email: formData.email,
        Telefono: formData.phone,
        Asistencia: formData.attendance,
        Confirmados: formData.confirmados,
        Mensaje: formData.message,
      }

      const response = await fetch("https://hook.us2.make.com/b9dperbya95cknjbq9q7q3u4nlmbnfew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(endpointData), // sending mapped data instead of formData
      })

      if (response.ok) {
        console.log("Formulario enviado exitosamente:", endpointData)
        setIsSubmitted(true)
      } else {
        console.error("Error al enviar formulario:", response.statusText)
        alert("Hubo un error al enviar el formulario. Por favor intenta nuevamente.")
      }
    } catch (error) {
      console.error("Error de red:", error)
      alert("Error de conexión. Por favor verifica tu internet e intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-16 px-4 bg-[#781207] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="w-16 h-16 text-[#f3c374] mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold mb-6 text-[#f3c374]">¡Gracias por confirmar!</h2>
          <p className="text-xl mb-8 opacity-90">
            Hemos recibido tu confirmación. ¡Esperamos verte en los 15 de Luana!
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-[#f3c374] text-[#781207] hover:bg-[#f3c374]/90">
            Modificar respuesta
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-16 px-4 bg-[#781207] text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-[#f3c374]">Confirmación de Asistencia</h2>
          <p className="text-xl opacity-90">Por favor confirmá tu asistencia antes del 25 de octubre</p>
        </div>

        <Card className="p-8 border-[#f3c374] border-2">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#781207] mb-4">Información Personal</h3>

                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Nombre completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>
                </div>
              </div>

              {/* Asistencia */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#781207] mb-4">Asistencia</h3>

                <div>
                  <Label className="text-gray-700 mb-3 block">¿Vas a asistir? *</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => handleInputChange("attendance", value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-gray-700">
                        Sí, asistiré
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-gray-700">
                        No podré asistir
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="maybe" />
                      <Label htmlFor="maybe" className="text-gray-700">
                        Aún no estoy seguro/a
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attendance === "yes" && (
                  <div>
                    <Label htmlFor="confirmados" className="text-gray-700">
                      Cantidad de invitados (incluyéndote)
                    </Label>
                    <select
                      id="confirmados"
                      value={formData.confirmados} // updated field name
                      onChange={(e) => handleInputChange("confirmados", e.target.value)} // updated field name
                      className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="1">1 persona</option>
                      <option value="2">2 personas</option>
                      <option value="3">3 personas</option>
                      <option value="4">4 personas</option>
                      <option value="5">5+ personas</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <Label htmlFor="message" className="text-gray-700">
                  Mensaje para Luana (opcional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-1"
                  placeholder="Dejá un mensaje especial para la quinceañera..."
                  rows={4}
                />
              </div>

             
             

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#781207] hover:bg-[#781207]/90 text-white font-semibold py-3"
                disabled={!formData.name || !formData.attendance || isLoading}
              >
                <Send className="w-5 h-5 mr-2" />
                {isLoading ? "Enviando..." : "Enviar Confirmación"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm opacity-75">
            Para cualquier consulta adicional, por favor completá el formulario con tu información de contacto
          </p>
        </div>
      </div>
    </section>
  )
}
