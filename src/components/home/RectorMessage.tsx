import { Quote } from 'lucide-react'

const rectorImage =
  'https://res.cloudinary.com/ds0tjwccs/image/upload/v1780310337/director-posgrado_kwfzqm.jpg'

export function RectorMessage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="relative flex justify-center lg:col-span-5 lg:justify-start">
          <div className="absolute bottom-0 right-0 top-12 w-3/4 rounded-t-full bg-muted opacity-60 z-0 lg:right-4 dark:opacity-20" />
          <div className="relative z-10 aspect-3/4 w-full max-w-sm overflow-hidden shadow-sm">
            <img
              src={rectorImage}
              alt="Dr. Eleazar Crucinta Ugarte, Rector de la UNSAAC"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:col-span-7">
          <h2 className="font-heading text-4xl font-light uppercase tracking-wide text-foreground sm:text-5xl">
            Mensaje del Rector
          </h2>
          <div className="relative mt-8">
            <Quote className="absolute -left-2 -top-3 h-8 w-8 text-muted" />
            <blockquote className="space-y-6 pl-8 font-sans text-[15px] font-light leading-relaxed text-muted-foreground">
              <p>
                Bienvenidos a la Escuela de Posgrado de la Universidad
                Nacional de San Antonio Abad del Cusco. Nuestra institución
                tiene el compromiso de formar profesionales con altos
                estándares académicos, capaces de liderar procesos de
                transformación en sus respectivas áreas del conocimiento.
              </p>
              <p>
                Los programas de posgrado que ofrecemos están diseñados para
                responder a las exigencias de un mundo globalizado,
                combinando rigurosidad académica con una visión humanista
                del desarrollo.
              </p>
            </blockquote>
          </div>
          <div className="mt-8 border-l border-muted pl-8">
            <div className="font-heading text-lg text-foreground">
              Dr. Eleazar Crucinta Ugarte
            </div>
            <div className="mt-1 font-sans text-xs uppercase tracking-widest text-muted-foreground/80">
              Rector de la UNSAAC
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
