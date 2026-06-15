import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const comunicadosMock = [
  { slug: 'convocatoria-2026', title: 'Convocatoria 2026', date: '15 de junio, 2026', summary: 'Apertura de inscripciones para el semestre académico 2026 en todos los programas de posgrado.', image: null },
  { slug: 'resultados-admision', title: 'Resultados de Admisión', date: '10 de junio, 2026', summary: 'Publicación de resultados del último proceso de admisión.', image: null },
  { slug: 'seminario-investigacion', title: 'Seminario de Investigación', date: '5 de junio, 2026', summary: 'Invitación al seminario internacional de metodología de la investigación.', image: null },
  { slug: 'becas-posgrado', title: 'Becas de Posgrado', date: '1 de junio, 2026', summary: 'Programa de becas para estudiantes destacados 2026.', image: null },
]

export function LatestComunicados() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Últimos Comunicados
          </h2>
          <p className="mt-2 text-muted-foreground">
            Mantente informado con las últimas noticias y anuncios.
          </p>
        </div>
        <Button variant="ghost" asChild className="hidden sm:flex">
          <Link to="/comunicados">
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {comunicadosMock.map((comunicado) => (
          <Link key={comunicado.slug} to={`/comunicados/${comunicado.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <div className="aspect-[16/9] w-full bg-muted" />
              <CardHeader>
                <Badge variant="secondary" className="w-fit text-xs">
                  {comunicado.date}
                </Badge>
                <CardTitle className="text-base leading-snug">
                  {comunicado.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {comunicado.summary}
                </p>
              </CardContent>
              <CardFooter>
                <span className="text-sm font-medium text-primary">
                  Leer más
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center sm:hidden">
        <Button asChild>
          <Link to="/comunicados">
            Ver todos los comunicados
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
