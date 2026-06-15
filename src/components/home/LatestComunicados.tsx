import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const comunicadosMock = [
  { slug: 'convocatoria-2026', title: 'Convocatoria 2026', date: '15 de junio, 2026', summary: 'Apertura de inscripciones para el semestre académico 2026 en todos los programas de posgrado.' },
  { slug: 'resultados-admision', title: 'Resultados de Admisión', date: '10 de junio, 2026', summary: 'Publicación de resultados del último proceso de admisión.' },
  { slug: 'seminario-investigacion', title: 'Seminario de Investigación', date: '5 de junio, 2026', summary: 'Invitación al seminario internacional de metodología de la investigación.' },
  { slug: 'becas-posgrado', title: 'Becas de Posgrado', date: '1 de junio, 2026', summary: 'Programa de becas para estudiantes destacados 2026.' },
]

export function LatestComunicados() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide sm:text-4xl">
            Últimos Comunicados
          </h2>
          <p className="mt-2 font-sans text-base font-light leading-relaxed text-muted-foreground">
            Mantente informado con las últimas noticias y anuncios.
          </p>
        </div>
        <Button variant="ghost" asChild className="hidden sm:flex">
          <Link
            to="/comunicados"
            className="font-sans text-xs uppercase tracking-widest"
          >
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {comunicadosMock.map((comunicado) => (
          <Link key={comunicado.slug} to={`/comunicados/${comunicado.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-sm">
              <div className="aspect-[16/9] w-full bg-muted" />
              <CardHeader>
                <Badge className="w-fit bg-muted/60 font-sans text-[10px] uppercase tracking-widest text-muted-foreground dark:bg-muted/20">
                  {comunicado.date}
                </Badge>
                <CardTitle className="font-heading text-base font-light tracking-wide">
                  {comunicado.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground line-clamp-2">
                  {comunicado.summary}
                </p>
              </CardContent>
              <CardFooter>
                <span className="font-sans text-xs uppercase tracking-widest text-primary">
                  Leer más
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center sm:hidden">
        <Button asChild>
          <Link
            to="/comunicados"
            className="font-sans text-xs uppercase tracking-widest"
          >
            Ver todos los comunicados
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
