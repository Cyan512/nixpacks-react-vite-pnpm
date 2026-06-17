import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, ChevronRight, Share2, Printer } from 'lucide-react'
import { comunicados } from '@/data/comunicados'

export default function ComunicadoDetalle() {
  const { slug } = useParams<{ slug: string }>()
  const comunicado = comunicados.find((c) => c.slug === slug)

  if (!comunicado) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-light uppercase tracking-wide text-foreground sm:text-5xl">
          Comunicado no encontrado
        </h1>
        <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted-foreground">
          El comunicado que buscas no existe o ha sido eliminado.
        </p>
        <Button asChild className="mt-6">
          <Link
            to="/comunicados"
            className="font-sans text-sm font-normal uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a comunicados
          </Link>
        </Button>
      </div>
    )
  }

  const relacionados = comunicados
    .filter((c) => c.category === comunicado.category && c.slug !== comunicado.slug)
    .slice(0, 3)

  return (
    <>
      {/* Contenedor principal con 2 columnas */}
      <div className="w-full border-b border-border/40 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLUMNA IZQUIERDA (Sidebar de Navegación) - Ocupa 3/12 partes */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 h-fit">
            <Button variant="ghost" asChild className="group -ml-4 rounded-none hover:bg-transparent text-muted-foreground hover:text-foreground">
              <Link to="/comunicados" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  Volver a comunicados
                </span>
              </Link>
            </Button>

            <div className="h-px bg-border/40" />

            <div className="flex flex-col gap-3 pt-2">
              <button className="flex items-center gap-2 text-left font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="h-4 w-4" /> Compartir enlace
              </button>
              <button onClick={() => window.print()} className="flex items-center gap-2 text-left font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                <Printer className="h-4 w-4" /> Imprimir comunicado
              </button>
            </div>
          </aside>

          {/* COLUMNA DERECHA (El Cuerpo del Comunicado) - Ocupa 9/12 partes */}
          <main className="lg:col-span-9 lg:pl-8 border-t lg:border-t-0 lg:border-l border-border/40 pt-8 lg:pt-0">
            <article className="w-full max-w-4xl space-y-8">
              {/* Encabezado del artículo */}
              <header className="space-y-6 border-b border-border/40 pb-8">
                {/* Metadata superior */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-sans text-xs uppercase tracking-widest text-primary">
                    {comunicado.category}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    {comunicado.date}
                  </span>
                </div>

                {/* Título principal */}
                <h1 className="font-heading text-4xl font-light uppercase tracking-wide text-foreground sm:text-5xl">
                  {comunicado.title}
                </h1>

                {/* Descripción */}
                <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
                  {comunicado.description}
                </p>

                {/* Autor */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    Por
                  </span>
                  <span className="font-sans text-xs uppercase tracking-widest text-foreground">
                    {comunicado.author}
                  </span>
                </div>
              </header>

              {/* Imagen destacada principal */}
              {comunicado.image && (
                <figure className="my-8">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted">
                    <img
                      src={comunicado.image}
                      alt={`Imagen principal: ${comunicado.title}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </figure>
              )}

              {/* Contenido del comunicado */}
              <div className="space-y-6">
                {comunicado.content.split('\n\n').map((paragraph, i) => (
                  <div key={i}>
                    <p
                      className={`
                        font-sans font-light leading-relaxed
                        ${i === 0
                          ? 'text-base text-foreground border-l-4 border-primary pl-6 italic bg-muted/30 py-4 pr-4'
                          : 'text-base text-muted-foreground'
                        }
                      `}
                    >
                      {paragraph}
                    </p>

                    {/* Imagen de contenido adicional después del primer párrafo */}
                    {i === 0 && comunicado.contentImage && (
                      <figure className="my-10">
                        <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted">
                          <img
                            src={comunicado.contentImage}
                            alt={comunicado.contentImageAlt || `Imagen del comunicado: ${comunicado.title}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        {comunicado.contentImageCaption && (
                          <figcaption className="mt-3 text-center font-sans text-xs text-muted-foreground">
                            {comunicado.contentImageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </main>

        </div>
      </div>

      {relacionados.length > 0 && (
        <section className="border-t bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-foreground sm:text-4xl">
                  Comunicados relacionados
                </h2>
                <p className="mt-2 font-sans text-base font-light leading-relaxed text-muted-foreground">
                  Más publicaciones en {comunicado.category.toLowerCase()}.
                </p>
              </div>
              <Button variant="ghost" asChild className="hidden sm:inline-flex hover:bg-muted/50 dark:hover:bg-muted/20">
                <Link to="/comunicados">
                  <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    Ver todos
                  </span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((c) => (
                <Link key={c.slug} to={`/comunicados/${c.slug}`}>
                  <Card className="group h-full overflow-hidden pt-0! transition-shadow hover:shadow-md">
                    <div className="relative aspect-video w-full bg-muted" />
                    <CardHeader>
                      <CardTitle className="font-heading text-lg font-light uppercase tracking-wide text-foreground">
                        {c.title}
                      </CardTitle>
                      <CardDescription className="font-sans text-xs uppercase tracking-widest text-muted-foreground/80">
                        {c.date}
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
            </div>

            <Button variant="ghost" asChild className="mt-6 sm:hidden hover:bg-muted/50 dark:hover:bg-muted/20">
              <Link to="/comunicados">
                <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  Ver todos los comunicados
                </span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      )}

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
    </>
  )
}
