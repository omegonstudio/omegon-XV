import { Quote } from "lucide-react"

export default function QuoteSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#f3c374]/5 to-[#781207]/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-[#f3c374]" />
        </div>

        <div className="space-y-6">
          <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 font-light italic">
            <p className="mb-4">
              "Hoy no celebro solo mis 15 años, celebro cada instante que me trajo hasta aquí: los recuerdos, las
              sonrisas y, sobre todo, a las personas que me acompañan en este camino. Un sueño comienza, una etapa se
              cierra y otra, llena de ilusiones y esperanzas, se abre ante mí."
            </p>
            <p className="mb-4">
              "Mis 15 no son solo un número, son el reflejo de todo lo que viví y de quienes estuvieron a mi lado.
              Gracias por ser parte de esta noche mágica que guardaré para siempre en mi corazón."
            </p>
            <p>
              "Brillo con la luz de mis sueños y con el amor de quienes me rodean. Hoy comienza una nueva aventura,
              llena de magia y esperanza, y deseo que cada paso que dé me acerque más a la persona que quiero ser."
            </p>
          </blockquote>

          <div className="flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#f3c374] to-[#781207]"></div>
          </div>

          <p className="text-[#781207] font-serif text-xl">— Luana</p>
        </div>
      </div>
    </section>
  )
}
