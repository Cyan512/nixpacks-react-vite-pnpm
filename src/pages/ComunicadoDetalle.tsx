import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'

const comunicadosMock: Record<string, { title: string; date: string; content: string }> = {
  'convocatoria-2026': {
    title: 'Convocatoria 2026',
    date: '15 de junio, 2026',
    content: 'La Escuela de Posgrado de la Universidad Nacional de San Antonio Abad del Cusco anuncia la apertura de inscripciones para el semestre académico 2026-I. Los interesados podrán presentar sus expedientes desde el 1 de julio hasta el 15 de agosto del presente año. Los programas disponibles incluyen maestrías en Gestión Pública, Educación, Derecho, Ingeniería, entre otros. Para mayor información, acercarse a la oficina de admisión de la Escuela de Posgrado o visitar nuestra plataforma virtual.',
  },
}

export default function ComunicadoDetalle() {
  const { slug } = useParams<{ slug: string }>()
  const comunicado = slug ? comunicadosMock[slug] : null

  if (!comunicado) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl">
          Comunicado no encontrado
        </h1>
        <p className="mt-3 font-sans font-light leading-relaxed text-muted-foreground">
          El comunicado que buscas no existe o ha sido eliminado.
        </p>
        <Button asChild className="mt-6">
          <Link
            to="/comunicados"
            className="font-sans text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a comunicados
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Button variant="ghost" asChild className="mb-8">
        <Link to="/comunicados">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a comunicados
        </Link>
      </Button>
      <div className="aspect-[16/9] w-full rounded-xl bg-muted" />
      <div className="mt-8">
        <Badge className="bg-muted/60 font-sans text-xs uppercase tracking-widest text-muted-foreground dark:bg-muted/20">
          {comunicado.date}
        </Badge>
        <h1 className="mt-4 font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl">
          {comunicado.title}
        </h1>
        <Separator className="my-6" />
        <div>
          <p className="font-sans font-light leading-relaxed text-muted-foreground">
            {comunicado.content}
          </p>
        </div>
      </div>
    </article>
  )
}
