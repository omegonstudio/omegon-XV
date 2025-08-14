"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Send } from "lucide-react"

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guests: "1",
    dietaryRestrictions: "",
    message: "",
    transport: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se enviaría el formulario a un servicio como Google Forms, Formspree, etc.
    console.log("Formulario enviado:", formData)
    setIsSubmitted(true)
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
                  <>
                    <div>
                      <Label htmlFor="guests" className="text-gray-700">
                        Cantidad de invitados (incluyéndote)
                      </Label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => handleInputChange("guests", e.target.value)}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="1">1 persona</option>
                        <option value="2">2 personas</option>
                        <option value="3">3 personas</option>
                        <option value="4">4 personas</option>
                        <option value="5">5+ personas</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="dietary" className="text-gray-700">
                        Restricciones alimentarias
                      </Label>
                      <Input
                        id="dietary"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                        className="mt-1"
                        placeholder="Vegetariano, celíaco, alergias, etc."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="transport"
                        checked={formData.transport}
                        onCheckedChange={(checked) => handleInputChange("transport", checked as boolean)}
                      />
                      <Label htmlFor="transport" className="text-gray-700">
                        Necesito información sobre transporte
                      </Label>
                    </div>
                  </>
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
                disabled={!formData.name || !formData.attendance}
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Confirmación
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
