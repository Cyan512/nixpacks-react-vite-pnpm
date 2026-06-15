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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ruta de Admisión
          </h2>
          <p className="mt-3 text-muted-foreground">
            Conoce el proceso paso a paso para formar parte de nuestros
            programas de posgrado.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}>
                  <div className="ml-10 md:ml-0">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold md:relative md:left-auto md:shrink-0">
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
