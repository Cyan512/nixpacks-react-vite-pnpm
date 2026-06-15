import { Link } from 'react-router-dom'
import { AdmissionTimeline } from '@/components/home/AdmissionTimeline'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ProcesoAdmision() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl">
              Proceso de Admisión
            </h1>
            <p className="mt-3 font-sans text-lg font-light leading-relaxed text-muted-foreground">
          Conoce cada etapa del proceso de admisión y los requisitos
          necesarios para formar parte de nuestros programas de posgrado.
            </p>
          </div>
        </div>
      </section>

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
              className="bg-primary-foreground font-sans text-xs uppercase tracking-widest text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/comunicados">
                Ver convocatorias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 font-sans text-xs uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/maestrias">
                Explorar programas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
