import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { comunicados } from '@/data/comunicados'

const eventos = [
  {
    id: 1,
    dia: '15',
    mes: 'JUL',
    titulo: 'CHARLA INFORMATIVA SOBRE MOVILIDAD ESTUDIANTIL',
    fechaCompleta: '15-07-2026',
    hora: '11:00 am',
    lugar: 'Auditorio de la Escuela de Posgrado',
  },
  {
    id: 2,
    dia: '22',
    mes: 'JUL',
    titulo: 'TALLER DE INVESTIGACIÓN ACADÉMICA',
    fechaCompleta: '22-07-2026',
    hora: '9:00 am',
    lugar: 'Pabellón de Posgrado',
  },
  {
    id: 3,
    dia: '05',
    mes: 'AGO',
    titulo: 'INICIO DE SEMESTRE ACADÉMICO 2026-II',
    fechaCompleta: '05-08-2026',
    hora: '7:00 am',
    lugar: 'UNSAAC',
  },
]

export function LatestComunicados() {
  const destacada = comunicados[0]
  const secundarias = comunicados.slice(1, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div>
            <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-foreground sm:text-4xl">
              Noticias
            </h2>
            <p className="mt-2 font-sans text-base font-light leading-relaxed text-muted-foreground">
              Mantente informado sobre las últimas novedades de la Escuela de
              Posgrado.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {destacada && (
              <Link
                to={`/comunicados/${destacada.slug}`}
                className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md md:col-span-1"
              >
                <div className="relative h-48 overflow-hidden bg-muted md:h-56">
                  <img
                    src={destacada.image}
                    alt={destacada.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <h3 className="font-heading text-lg font-light uppercase tracking-wide text-foreground">
                    {destacada.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                      {destacada.date}
                    </span>
                    <span className="inline-flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-primary transition-colors hover:text-foreground">
                      Leer más <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            )}
            <div className="flex flex-col gap-4">
              {secundarias.map((noticia) => (
                <Link
                  key={noticia.slug}
                  to={`/comunicados/${noticia.slug}`}
                  className="flex overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="w-1/3 shrink-0 bg-muted">
                    <img
                      src={noticia.image}
                      alt={noticia.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex w-2/3 flex-col justify-between p-3">
                    <div>
                      <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                        {noticia.date}
                      </span>
                      <h4 className="mt-1 font-heading text-xs font-light uppercase tracking-wide text-foreground line-clamp-2">
                        {noticia.title}
                      </h4>
                    </div>
                    <span className="mt-2 inline-flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-primary transition-colors hover:text-foreground">
                      Leer más <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl bg-primary p-6 shadow-sm">
          <div>
            <h3 className="border-b border-primary-foreground/20 pb-3 font-heading text-lg font-light uppercase tracking-wide text-primary-foreground">
              Próximos eventos
            </h3>
            <div className="divide-y divide-primary-foreground/20">
              {eventos.map((evento) => (
                <div
                  key={evento.id}
                  className="flex items-start gap-4 py-4 first:pt-3 last:pb-0"
                >
                  <div className="flex min-w-[50px] flex-col items-center border-r border-primary-foreground/20 pr-3 text-center leading-none text-primary-foreground">
                    <span className="font-heading text-2xl font-light">
                      {evento.dia}
                    </span>
                    <span className="mt-0.5 font-sans text-xs font-light tracking-widest text-primary-foreground/80">
                      {evento.mes}
                    </span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-heading text-xs font-light uppercase tracking-wide text-primary-foreground">
                      {evento.titulo}
                    </h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 font-sans text-xs font-light text-primary-foreground/70">
                      <span>{evento.fechaCompleta}</span>
                      <span>{evento.hora}</span>
                    </div>
                    <p className="flex items-start gap-1 font-sans text-xs font-light leading-relaxed text-primary-foreground/60">
                      {evento.lugar}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center border-t border-primary-foreground/10 pt-4">
            <Button
              variant="outline"
              size="default"
              className="bg-transparent border-primary-foreground/30 font-sans text-sm font-normal uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10"
            asChild>
              <Link to="/comunicados">
                Ver todos los eventos
                <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
