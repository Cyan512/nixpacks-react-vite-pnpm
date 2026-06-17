import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHero } from '@/components/shared/PageHero'
import { FilterBar, type FilterState } from '@/components/shared/FilterBar'
import { SearchX, BookX } from 'lucide-react'

const CLOUDINARY_IMG = 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1779898731/large_Whats_App_Image_2024_01_24_at_10_38_22_AM_13_1_p3eu3c_569c0d75fb.png'

const programsByType: Record<string, Array<{ slug: string; title: string; facultad: string; duration: string; modality: string; description: string; enConvocatoria: boolean }>> = {
  maestrias: [
    { slug: 'gestion-publica', title: 'Maestría en Gestión Pública', facultad: 'Facultad de Ciencias Económicas', duration: '2 años', modality: 'Presencial', description: 'Formación especializada en administración y gestión de recursos públicos.', enConvocatoria: true },
    { slug: 'educacion', title: 'Maestría en Educación', facultad: 'Facultad de Educación', duration: '2 años', modality: 'Semipresencial', description: 'Investigación y docencia en el campo educativo.', enConvocatoria: false },
    { slug: 'derecho', title: 'Maestría en Derecho', facultad: 'Facultad de Derecho', duration: '2 años', modality: 'Presencial', description: 'Estudios avanzados en ciencias jurídicas.', enConvocatoria: true },
  ],
  doctorados: [
    { slug: 'ciencias-sociales', title: 'Doctorado en Ciencias Sociales', facultad: 'Facultad de Ciencias Sociales', duration: '3 años', modality: 'Presencial', description: 'Investigación de alto nivel en ciencias sociales.', enConvocatoria: false },
    { slug: 'ingenieria', title: 'Doctorado en Ingeniería', facultad: 'Facultad de Ingeniería', duration: '3 años', modality: 'Presencial', description: 'Formación de investigadores en ingeniería.', enConvocatoria: true },
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

  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    search: '',
    facultad: '',
    modalidad: '',
    convocatoria: '',
  })

  const facultades = [...new Set(programs.map((p) => p.facultad))]

  const filteredPrograms = programs.filter((program) => {
    const matchSearch =
      !appliedFilters.search ||
      program.title.toLowerCase().includes(appliedFilters.search.toLowerCase()) ||
      program.description.toLowerCase().includes(appliedFilters.search.toLowerCase())
    const matchFacultad =
      !appliedFilters.facultad || appliedFilters.facultad === 'all' ||
      program.facultad === appliedFilters.facultad
    const matchModalidad =
      !appliedFilters.modalidad || appliedFilters.modalidad === 'all' ||
      program.modality === appliedFilters.modalidad
    const matchConvocatoria =
      !appliedFilters.convocatoria || appliedFilters.convocatoria === 'all' ||
      String(program.enConvocatoria) === appliedFilters.convocatoria
    return matchSearch && matchFacultad && matchModalidad && matchConvocatoria
  })

  const handleApplyFilters = (filters: FilterState) => {
    setAppliedFilters(filters)
  }

  const handleClearFilters = () => {
    setAppliedFilters({
      search: '',
      facultad: '',
      modalidad: '',
      convocatoria: '',
    })
  }

  if (!programs || programs.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <BookX className="mx-auto h-16 w-16 text-muted/40" />
        <h1 className="mt-4 font-heading text-4xl font-light uppercase tracking-wide text-foreground sm:text-5xl">
          Programas no encontrados
        </h1>
        <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted-foreground">
          No se encontraron programas para esta categoría.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex font-sans text-xs uppercase tracking-widest text-primary hover:text-foreground"
        >
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHero
        title={title}
        subtitle={`Explora nuestros programas de ${title.toLowerCase()} y encuentra el que mejor se adapte a tus objetivos profesionales.`}
      />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <FilterBar
          facultades={facultades}
          onApply={handleApplyFilters}
          onClear={handleClearFilters}
        />

        <p className="mt-6 font-sans text-sm font-light text-muted-foreground">
          {filteredPrograms.length === programs.length
            ? <><strong className="text-primary">{programs.length}</strong> programas disponibles</>
            : <>Mostrando <strong className="text-primary">{filteredPrograms.length}</strong> de {programs.length} programas</>}
        </p>

        {filteredPrograms.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <Link key={program.slug} to={`/${tipo}/${program.slug}`}>
                <Card className="group h-full overflow-hidden !pt-0 transition-shadow hover:shadow-md">
                  <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03]">
                    <img
                      src={CLOUDINARY_IMG}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    {program.enConvocatoria && (
                      <Badge className="absolute left-1/2 top-3 z-10 -translate-x-1/2 bg-primary font-sans text-xs uppercase tracking-widest text-primary-foreground">
                        En convocatoria
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading text-lg font-light uppercase tracking-wide text-foreground">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="font-sans text-xs uppercase tracking-widest text-muted-foreground/80">
                      {program.facultad}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-border/40 bg-transparent transition-colors duration-300 group-hover:border-primary/30">
                    <div className="flex w-full items-center gap-3">
                      <span className="h-px flex-1 origin-left scale-x-0 bg-primary/40 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      <span className="flex shrink-0 items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-primary/60 transition-colors duration-300 group-hover:text-primary">
                        Ver programa
                      </span>
                      <span className="h-px flex-1 origin-right scale-x-0 bg-primary/40 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <SearchX className="mx-auto mb-4 h-12 w-12 text-muted/30" />
            <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
              No se encontraron programas con los filtros seleccionados.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-3 font-sans text-xs uppercase tracking-widest text-primary hover:text-foreground"
            >
              Limpiar filtros
            </button>
          </div>
        )}
    </div>
    </>
  )
}
