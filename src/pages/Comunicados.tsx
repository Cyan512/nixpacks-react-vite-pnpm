import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { PageHero } from '@/components/shared/PageHero'
import { comunicados } from '@/data/comunicados'

const INITIAL_VISIBLE = 5

export default function Comunicados() {
  const [showAll, setShowAll] = useState(false)
  const destacado = comunicados[0]
  if (!destacado) return null
  const anteriores = comunicados.slice(1)
  const visibleAnteriores = showAll ? anteriores : anteriores.slice(0, INITIAL_VISIBLE)
  const hasMore = anteriores.length > INITIAL_VISIBLE

  return (
    <div className="min-h-screen">
      <PageHero
        title="Comunicados"
        subtitle="Mantente informado sobre las últimas noticias, anuncios y convocatorias de la Escuela de Posgrado."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">

        <section className="rounded-2xl border bg-card shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-block font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Último Comunicado
            </span>
            <h3 className="font-heading text-lg font-light uppercase tracking-wide text-foreground">
              {destacado.title}
            </h3>
            <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground">
              {destacado.description}
            </p>
            <span className="block font-sans text-xs uppercase tracking-widest text-muted-foreground">
              {destacado.date}
            </span>
            <Button asChild size="lg" className="font-sans text-sm font-normal uppercase tracking-widest">
              <Link to={`/comunicados/${destacado.slug}`}>
                Leer comunicado
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="w-full md:w-[45%] aspect-video rounded-xl bg-muted flex items-center justify-center">
            <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground/60">
              Imagen destacada
            </span>
          </div>
        </section>

        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-foreground sm:text-4xl">
              Comunicados anteriores
            </h2>
            <p className="mt-2 font-sans text-base font-light leading-relaxed text-muted-foreground">
              Mantente al día con todas nuestras publicaciones.
            </p>
          </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleAnteriores.map((comunicado) => (
            <Link key={comunicado.slug} to={`/comunicados/${comunicado.slug}`}>
              <Card className="group h-full overflow-hidden !pt-0 transition-shadow hover:shadow-md">
                <div className="relative aspect-video w-full bg-muted" />
                <CardHeader>
                  <CardTitle className="font-heading text-lg font-light uppercase tracking-wide text-foreground">
                    {comunicado.title}
                  </CardTitle>
                  <CardDescription className="font-sans text-xs uppercase tracking-widest text-muted-foreground/80">
                    {comunicado.date}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-border/40 bg-transparent transition-colors duration-300 group-hover:border-primary/30">
                  <div className="flex w-full items-center gap-3">
                    <span className="h-px flex-1 origin-left scale-x-0 bg-primary/40 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    <span className="flex shrink-0 items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-primary/60 transition-colors duration-300 group-hover:text-primary">
                      Leer más
                    </span>
                    <span className="h-px flex-1 origin-right scale-x-0 bg-primary/40 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </section>

        {hasMore && (
          <div className="flex justify-center pt-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="font-sans text-sm font-normal uppercase tracking-widest"
            >
              {showAll ? 'Ver menos comunicados' : 'Ver más comunicados'}
              {showAll ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
        )}
        </div>

      </div>

      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-primary-foreground sm:text-4xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-base font-light leading-relaxed text-primary-foreground/80">
            Conoce nuestros programas de posgrado y forma parte de la excelencia
            académica de la UNSAAC.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary-foreground font-sans text-sm font-normal uppercase tracking-widest text-primary hover:bg-primary-foreground/90">
              <Link to="/proceso-admision">
                Ver proceso de admisión
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 font-sans text-sm font-normal uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/maestrias">
                Explorar programas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
