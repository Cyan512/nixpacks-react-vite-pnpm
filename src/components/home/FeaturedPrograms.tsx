import { Link } from 'react-router-dom'

const programs = [
  { tipo: 'maestrias', title: 'Maestrías', count: 12 },
  { tipo: 'doctorados', title: 'Doctorados', count: 5 },
  { tipo: 'residentado-medico', title: 'Residentado Médico', count: 8 },
  { tipo: 'segundas-especialidades', title: 'Segundas Especialidades', count: 15 },
]

export function FeaturedPrograms() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide sm:text-4xl">
            Programas Destacados
          </h2>
          <p className="mt-3 font-sans text-base font-light leading-relaxed text-muted-foreground">
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
                <h3 className="font-heading text-2xl font-light uppercase tracking-wide text-primary-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 font-sans text-sm font-light text-primary-foreground/80">
                  {program.count} programas disponibles
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
