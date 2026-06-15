import { Link } from 'react-router-dom'

const programs = [
  { tipo: 'maestrias', title: 'Maestrías', count: 12, description: 'Programas de maestría en diversas áreas del conocimiento.' },
  { tipo: 'doctorados', title: 'Doctorados', count: 5, description: 'Programas doctorales con altos estándares académicos.' },
  { tipo: 'residentado-medico', title: 'Residentado Médico', count: 8, description: 'Formación especializada para profesionales de la salud.' },
  { tipo: 'segundas-especialidades', title: 'Segundas Especialidades', count: 15, description: 'Especializaciones profesionales de alto nivel.' },
]

export function FeaturedPrograms() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Programas Destacados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explora nuestra oferta académica de posgrado y encuentra el
            programa ideal para tu desarrollo profesional.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Link
              key={program.tipo}
              to={`/${program.tipo}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl bg-muted"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-transform group-hover:scale-105" />
              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-bold text-primary-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  {program.count} programas disponibles
                </p>
                <p className="mt-1 text-xs text-primary-foreground/60">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
