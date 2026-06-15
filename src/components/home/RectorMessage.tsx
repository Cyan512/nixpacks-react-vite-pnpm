import { Card, CardContent } from '@/components/ui/card'

export function RectorMessage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="aspect-[3/4] overflow-hidden rounded-xl bg-muted lg:aspect-[4/5]">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 text-muted-foreground">
            <span className="text-sm">Foto del rector</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mensaje del Rector
          </h2>
          <Card className="mt-6 border-0 bg-muted/50 p-0 shadow-none">
            <CardContent className="p-6 sm:p-8">
              <blockquote className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  Bienvenidos a la Escuela de Posgrado de la Universidad
                  Nacional de San Antonio Abad del Cusco. Nuestra institución
                  tiene el compromiso de formar profesionales con altos
                  estándares académicos, capaces de liderar procesos de
                  transformación en sus respectivas áreas del conocimiento.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Los programas de posgrado que ofrecemos están diseñados para
                  responder a las exigencias de un mundo globalizado,
                  combinando rigurosidad académica con una visión humanista
                  del desarrollo.
                </p>
              </blockquote>
              <div className="mt-6 border-t pt-4">
                <div className="font-semibold">Dr. Eleazar Crucinta Ugarte</div>
                <div className="text-sm text-muted-foreground">
                  Rector de la UNSAAC
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
