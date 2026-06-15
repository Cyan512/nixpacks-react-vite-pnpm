import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const programsByType: Record<string, Array<{ slug: string; title: string; duration: string; modality: string; description: string }>> = {
  maestrias: [
    { slug: 'gestion-publica', title: 'Maestría en Gestión Pública', duration: '2 años', modality: 'Presencial', description: 'Formación especializada en administración y gestión de recursos públicos.' },
    { slug: 'educacion', title: 'Maestría en Educación', duration: '2 años', modality: 'Semipresencial', description: 'Investigación y docencia en el campo educativo.' },
    { slug: 'derecho', title: 'Maestría en Derecho', duration: '2 años', modality: 'Presencial', description: 'Estudios avanzados en ciencias jurídicas.' },
  ],
  doctorados: [
    { slug: 'ciencias-sociales', title: 'Doctorado en Ciencias Sociales', duration: '3 años', modality: 'Presencial', description: 'Investigación de alto nivel en ciencias sociales.' },
    { slug: 'ingenieria', title: 'Doctorado en Ingeniería', duration: '3 años', modality: 'Presencial', description: 'Formación de investigadores en ingeniería.' },
  ],
}

const tipoTitles: Record<string, string> = {
  maestrias: 'Maestrías',
  doctorados: 'Doctorados',
  'residentado-medico': 'Residentado Médico',
  'segundas-especialidades': 'Segundas Especialidades',
}

export default function ProgramList() {
  const { tipo } = useParams<{ tipo: string }>()
  const programs = tipo ? programsByType[tipo] : []
  const title = tipo ? tipoTitles[tipo] || tipo.charAt(0).toUpperCase() + tipo.slice(1) : 'Programas'

  if (!programs || programs.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Programas no encontrados</h1>
        <p className="mt-3 text-muted-foreground">
          No se encontraron programas para esta categoría.
        </p>
        <Link to="/" className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Explora nuestros programas de {title.toLowerCase()} y encuentra el
          que mejor se adapte a tus objetivos profesionales.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <Link key={program.slug} to={`/${tipo}/${program.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <div className="aspect-video w-full bg-muted" />
              <CardHeader>
                <CardTitle className="text-lg">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {program.description}
                </p>
                <div className="mt-4 flex gap-2">
                  <Badge variant="secondary">{program.duration}</Badge>
                  <Badge variant="outline">{program.modality}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <span className="flex items-center text-sm font-medium text-primary">
                  Ver programa
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
