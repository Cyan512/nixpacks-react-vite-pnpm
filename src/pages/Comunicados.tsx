import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const comunicadosMock = [
  { slug: 'convocatoria-2026', title: 'Convocatoria 2026', date: '15 de junio, 2026', summary: 'Apertura de inscripciones para el semestre académico 2026 en todos los programas de posgrado.' },
  { slug: 'resultados-admision', title: 'Resultados de Admisión', date: '10 de junio, 2026', summary: 'Publicación de resultados del último proceso de admisión.' },
  { slug: 'seminario-investigacion', title: 'Seminario de Investigación', date: '5 de junio, 2026', summary: 'Invitación al seminario internacional de metodología de la investigación.' },
  { slug: 'becas-posgrado', title: 'Becas de Posgrado', date: '1 de junio, 2026', summary: 'Programa de becas para estudiantes destacados 2026.' },
  { slug: 'calendario-academico', title: 'Calendario Académico 2026', date: '28 de mayo, 2026', summary: 'Fechas importantes del calendario académico para el presente año.' },
  { slug: 'convenios-internacionales', title: 'Convenios Internacionales', date: '20 de mayo, 2026', summary: 'Nuevos convenios con universidades internacionales para intercambio académico.' },
]

export default function Comunicados() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl">
          Comunicados
        </h1>
        <p className="mt-3 font-sans text-lg font-light leading-relaxed text-muted-foreground">
          Mantente informado sobre las últimas noticias, anuncios y
          convocatorias de la Escuela de Posgrado.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comunicadosMock.map((comunicado) => (
          <Link key={comunicado.slug} to={`/comunicados/${comunicado.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-sm">
              <div className="aspect-[16/9] w-full bg-muted" />
              <CardHeader>
                <Badge className="w-fit bg-muted/60 font-sans text-xs uppercase tracking-widest text-muted-foreground dark:bg-muted/20">
                  {comunicado.date}
                </Badge>
                <CardTitle className="font-heading text-lg font-light tracking-wide">
                  {comunicado.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground line-clamp-3">
                  {comunicado.summary}
                </p>
              </CardContent>
              <CardFooter>
                <span className="flex items-center font-sans text-xs uppercase tracking-widest text-primary">
                  Leer más
                  <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
