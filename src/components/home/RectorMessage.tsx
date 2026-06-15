import { Quote } from 'lucide-react'

const rectorImage =
  'https://res.cloudinary.com/ds0tjwccs/image/upload/v1780310337/director-posgrado_kwfzqm.jpg'

export function RectorMessage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-2xl border bg-card lg:grid-cols-2">
        <div className="order-last flex flex-col justify-center p-8 sm:p-10 lg:order-first">
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide sm:text-4xl">
            Mensaje del Rector
          </h2>
          <div className="relative mt-6">
            <Quote className="absolute -left-1 -top-1 h-8 w-8 text-primary/20" />
            <blockquote className="space-y-4 pl-6">
              <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
                Bienvenidos a la Escuela de Posgrado de la Universidad
                Nacional de San Antonio Abad del Cusco. Nuestra institución
                tiene el compromiso de formar profesionales con altos
                estándares académicos, capaces de liderar procesos de
                transformación en sus respectivas áreas del conocimiento.
              </p>
              <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
                Los programas de posgrado que ofrecemos están diseñados para
                responder a las exigencias de un mundo globalizado,
                combinando rigurosidad académica con una visión humanista
                del desarrollo.
              </p>
            </blockquote>
          </div>
          <div className="mt-6 border-l-2 border-primary/20 pl-4">
            <div className="font-sans font-semibold">
              Dr. Eleazar Crucinta Ugarte
            </div>
            <div className="font-sans text-sm text-muted-foreground">
              Rector de la UNSAAC
            </div>
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-full">
          <img
            src={rectorImage}
            alt="Dr. Eleazar Crucinta Ugarte, Rector de la UNSAAC"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
