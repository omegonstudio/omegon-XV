import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function DressCodeSection() {
  const dressColors = [
    { name: "Negro", color: "#000000" },
    { name: "Marrón Oscuro", color: "#3C2414" },
    { name: "Marrón", color: "#8B4513" },
    { name: "Verde Oliva", color: "#808000" },
    { name: "Verde Bosque", color: "#228B22" },
    { name: "Lavanda", color: "#E6E6FA" },
    { name: "Rosa Suave", color: "#FFB6C1" },
    { name: "Rosa Vibrante", color: "#FF69B4" },
    { name: "Azul Océano", color: "#006994" },
    { name: "Celeste Claro", color: "#87CEEB" },
    { name: "Naranja", color: "#FFA500" },
    { name: "Mostaza", color: "#FFDB58" },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-[#781207] mb-8">Código de Vestimenta</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 border-[#f3c374] border-2">
            <CardContent className="p-0">
              <Users className="w-12 h-12 text-[#781207] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#781207] mb-4">Chicos</h3>
              <p className="text-gray-700">Traje, camisa, pantalón de vestir o jean, corbata, zapatillas o zapatos</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-[#f3c374] border-2">
            <CardContent className="p-0">
              <Users className="w-12 h-12 text-[#781207] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#781207] mb-4">Chicas</h3>
              <p className="text-gray-700">Vestido largo, traje, zapatos o tacos no altos</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-[#781207] mb-6">Paleta de Colores Recomendada</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {dressColors.map((colorItem) => (
              <div key={colorItem.name} className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-gray-300"
                  style={{ backgroundColor: colorItem.color }}
                ></div>
                <p className="text-xs font-medium text-gray-700">{colorItem.name}</p>
              </div>
            ))}
          </div>
          <p className="text-sm italic text-gray-600">
            Lo más importante para nosotros es que estés cómodo, pero nos gustaría que la vestimenta sea formal.
          </p>
          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm font-medium text-red-800">
              ⚠️ Por favor evitar cualquier tono de rojo o bordó el día del evento, ya que la quinceañera vestirá ese
              color.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
