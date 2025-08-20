import { Card, CardContent } from "@/components/ui/card"

export default function MenuSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-[#781207] text-center mb-8">Menú</h2>

        <div className="flex justify-center mb-12 relative">
          <img
            src="/images/menu-floral-border.png"
            alt="Decorative floral border"
            className="w-96 h-auto opacity-80 relative z-0"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <Card className="p-6 border-[#f3c374] border-2">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-[#781207] mb-4">🍕 Entrada</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pizzetas</li>
                <li>• Empanadas de carne</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 border-[#f3c374] border-2">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-[#781207] mb-4">🍖 Plato Principal</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pata flameada</li>
                <li>• Coca-Cola, Sprite, Fanta</li>
                <li>• Agua</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 border-[#f3c374] border-2">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-[#781207] mb-4">🎂 Corte Simbólico</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Torta</li>
                <li>• Sidra clásica</li>
                <li>• Sidra de frutilla</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 border-[#f3c374] border-2">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-[#781207] mb-4">🍫 Mesa Dulce</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cascada de chocolate</li>
                <li>• Malvadiscos</li>
                <li>• Frutas cortadas</li>
                <li>• Gomitas</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6 border-[#f3c374] border-2 mt-8">
          <CardContent className="p-0">
            <h3 className="text-xl font-semibold text-[#781207] mb-4 text-center">🍹 Barra de Tragos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Daiquiri de frutilla</li>
                <li>• Daiquiri de durazno</li>
                <li>• Daiquiri de ananá</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Fernet</li>
                <li>• Gancia</li>
                <li>• Vino con gas</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
