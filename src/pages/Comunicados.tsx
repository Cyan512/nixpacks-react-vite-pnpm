import { Link } from 'react-router-dom'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHero } from '@/components/shared/PageHero'

const comunicadosMock = [
  { slug: 'convocatoria-2026', title: 'Convocatoria 2026', date: '15 de junio, 2026' },
  { slug: 'resultados-admision', title: 'Resultados de Admisión', date: '10 de junio, 2026' },
  { slug: 'seminario-investigacion', title: 'Seminario de Investigación', date: '5 de junio, 2026' },
  { slug: 'becas-posgrado', title: 'Becas de Posgrado', date: '1 de junio, 2026' },
  { slug: 'calendario-academico', title: 'Calendario Académico 2026', date: '28 de mayo, 2026' },
  { slug: 'convenios-internacionales', title: 'Convenios Internacionales', date: '20 de mayo, 2026' },
]

export default function Comunicados() {
  return (
    <>
      <PageHero
        title="Comunicados"
        subtitle="Mantente informado sobre las últimas noticias, anuncios y convocatorias de la Escuela de Posgrado."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comunicadosMock.map((comunicado) => (
          <Link key={comunicado.slug} to={`/comunicados/${comunicado.slug}`}>
            <Card className="group h-full overflow-hidden !pt-0 transition-shadow hover:shadow-md">
              <div className="relative aspect-[16/9] w-full bg-muted" />
              <CardHeader>
                <Badge className="w-fit bg-muted/60 font-sans text-xs uppercase tracking-widest text-muted-foreground dark:bg-muted/20">
                  {comunicado.date}
                </Badge>
                <CardTitle className="font-heading text-lg font-light uppercase tracking-wide">
                  {comunicado.title}
                </CardTitle>
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
    </div>
    </>
  )
}
