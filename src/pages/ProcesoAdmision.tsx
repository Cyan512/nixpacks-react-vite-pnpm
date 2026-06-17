import { Link } from 'react-router-dom'
import { AdmissionTimeline } from '@/components/home/AdmissionTimeline'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/shared/PageHero'
import { ArrowRight } from 'lucide-react'

export default function ProcesoAdmision() {
  return (
    <>
      <PageHero
        title="Proceso de Admisión"
        subtitle="Conoce cada etapa del proceso de admisión y los requisitos necesarios para formar parte de nuestros programas de posgrado."
      />

      <AdmissionTimeline />

      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-primary-foreground sm:text-4xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-base font-light leading-relaxed text-primary-foreground/80">
            Inicia tu proceso de inscripción y forma parte de la Escuela de
            Posgrado de la UNSAAC. Nuestro equipo está listo para orientarte
            en cada etapa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground font-sans text-sm font-normal uppercase tracking-widest text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/comunicados">
                Ver convocatorias
                <ArrowRight className="ml-2 h-4 w-4 text-secondary" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground/30 font-sans text-sm font-normal uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/maestrias">
                Explorar programas
                <ArrowRight className="ml-2 h-4 w-4 text-secondary" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
