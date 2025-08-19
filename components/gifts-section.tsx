"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Copy, Check } from "lucide-react"

export default function GiftsSection() {
  const [copiedAlias, setCopiedAlias] = useState(false)
  const [copiedCVU, setCopiedCVU] = useState(false)

  const copyToClipboard = async (text: string, type: "alias" | "cvu") => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "alias") {
        setCopiedAlias(true)
        setTimeout(() => setCopiedAlias(false), 2000)
      } else {
        setCopiedCVU(true)
        setTimeout(() => setCopiedCVU(false), 2000)
      }
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#f3c374]/10 to-[#781207]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-[#781207] mb-8">Regalos</h2>

        <Card className="p-8 border-[#f3c374] border-2">
          <CardContent className="p-0">
            <Gift className="w-12 h-12 text-[#781207] mx-auto mb-6" />
            <p className="text-lg text-gray-700 mb-8">
              Tu presencia es el mejor regalo, pero si querés colaborar para esta celebración especial, podés hacerlo a
              través de los siguientes datos:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#781207] mb-2">Alias</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <code className="bg-gray-100 px-4 py-2 rounded text-lg font-mono">luuusita.mp</code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard("luuusita.mp", "alias")}
                    className="border-[#781207] text-[#781207] hover:bg-[#781207] hover:text-white"
                  >
                    {copiedAlias ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedAlias ? "Copiado" : "Copiar"}
                  </Button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#781207] mb-2">CVU</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <code className="bg-gray-100 px-4 py-2 rounded text-lg font-mono">0000003100015712010119</code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard("0000003100015712010119", "cvu")}
                    className="border-[#781207] text-[#781207] hover:bg-[#781207] hover:text-white"
                  >
                    {copiedCVU ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedCVU ? "Copiado" : "Copiar"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
