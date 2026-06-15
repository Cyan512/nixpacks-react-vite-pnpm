import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { PageHero } from '@/components/shared/PageHero'
import { ArrowLeft } from 'lucide-react'

const programsData: Record<string, Record<string, { title: string; duration: string; modality: string; description: string; content: string }>> = {
  maestrias: {
    'gestion-publica': {
      title: 'Maestría en Gestión Pública',
      duration: '2 años',
      modality: 'Presencial',
      description: 'Formación especializada en administración y gestión de recursos públicos.',
      content: 'La Maestría en Gestión Pública está diseñada para profesionales que buscan desarrollar competencias en la administración eficiente de los recursos del Estado. El programa aborda temas como formulación de proyectos, presupuesto público, contrataciones del Estado y modernización de la gestión pública. Los egresados estarán capacitados para liderar procesos de transformación institucional en el sector público.',
    },
  },
}

export default function ProgramDetail() {
  const { tipo, slug } = useParams<{ tipo: string; slug: string }>()
  const program = tipo && slug ? programsData[tipo]?.[slug] : undefined

  if (!program) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl">
          Programa no encontrado
        </h1>
        <p className="mt-3 font-sans font-light leading-relaxed text-muted-foreground">
          El programa que buscas no existe o ha sido eliminado.
        </p>
        <Button asChild className="mt-6">
          <Link
            to={`/${tipo}`}
            className="font-sans text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a programas
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <PageHero
        title={program.title}
        description={program.description}
        badges={[
          { label: program.duration },
          { label: program.modality, variant: 'outline' },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link to={`/${tipo}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a programas
          </Link>
        </Button>
        <div className="aspect-video w-full rounded-xl bg-muted" />
        <div className="mt-8">
          <Separator className="my-6" />
          <div>
            <p className="font-sans font-light leading-relaxed text-muted-foreground">
              {program.content}
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
