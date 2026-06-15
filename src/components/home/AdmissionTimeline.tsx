import type { TimelineStep } from '@/types'

const steps: TimelineStep[] = [
  { step: 1, title: 'Registro', description: 'Completa el formulario de registro en línea con tus datos personales y académicos.' },
  { step: 2, title: 'Inscripción', description: 'Selecciona el programa de tu interés y formaliza tu inscripción.' },
  { step: 3, title: 'Pago', description: 'Realiza el pago de los derechos de admisión a través de los canales oficiales.' },
  { step: 4, title: 'Examen de admisión', description: 'Rinde el examen de admisión en la fecha y hora programada.' },
  { step: 5, title: 'Resultados', description: 'Consulta los resultados y sigue los pasos para tu matrícula si eres admitido.' },
]

export function AdmissionTimeline() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide sm:text-4xl">
            Ruta de Admisión
          </h2>
          <p className="mt-3 font-sans text-base font-light leading-relaxed text-muted-foreground">
            Conoce el proceso paso a paso para formar parte de nuestros
            programas de posgrado.
          </p>
        </div>
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-14' : 'md:order-last md:pl-14'}`}>
                  <div className="ml-12 md:ml-0">
                    <h3 className="font-heading text-lg font-light uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background font-sans text-sm font-medium md:relative md:left-auto md:shrink-0 dark:bg-card">
                  {step.step}
                </div>
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
