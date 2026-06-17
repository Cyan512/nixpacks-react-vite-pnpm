import type { TimelineStep } from '@/types'

const steps: TimelineStep[] = [
  { step: 1, title: 'Registro', description: 'Completa el formulario de registro en línea con tus datos personales y académicos para iniciar el proceso de admisión.' },
  { step: 2, title: 'Inscripción', description: 'Selecciona el programa de posgrado de tu interés y formaliza tu inscripción en la plataforma virtual.' },
  { step: 3, title: 'Pago', description: 'Realiza el pago de los derechos de admisión a través de los canales oficiales habilitados por la universidad.' },
  { step: 4, title: 'Examen de admisión', description: 'Rinde el examen de admisión en la fecha y hora programada, evaluando tus conocimientos y aptitudes.' },
  { step: 5, title: 'Resultados', description: 'Consulta los resultados del proceso de admisión y sigue los pasos para tu matrícula si eres admitido.' },
]

const stepImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop',
]

function MobileTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="md:hidden">
      {steps.map((step, index) => (
        <div key={step.step} className="relative flex gap-3 pb-5 last:pb-0">
          <div className="flex flex-col items-center">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-heading text-xs font-light text-foreground dark:bg-card">
              {step.step}
            </div>
            {index < steps.length - 1 && (
              <div className="mt-0.5 w-px flex-1 bg-border" />
            )}
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className="font-heading text-sm font-light uppercase tracking-wide text-foreground">
              {step.title}
            </h3>
            <p className="mt-1 font-sans text-sm font-light leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function AdmissionTimeline() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-foreground sm:text-4xl">
            Ruta de Admisión
          </h2>
          <p className="mt-3 font-sans text-base font-light leading-relaxed text-muted-foreground">
            Conoce el proceso paso a paso para formar parte de nuestros
            programas de posgrado.
          </p>
        </div>

        <div className="mt-12">
          <MobileTimeline steps={steps} />

          <div className="hidden md:block">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <div key={step.step}>
                  <div className={`flex flex-row ${isEven ? '' : 'flex-row-reverse'}`}>
                    <div className="flex flex-col items-center">
                      <div className={`w-32 py-5 border border-border rounded-lg uppercase flex flex-col items-center justify-center bg-card ${isEven ? 'mr-4' : 'ml-4'}`}>
                        <div className="font-heading text-3xl font-light text-muted-foreground">
                          Paso {step.step}
                        </div>
                        <div className="font-heading text-sm font-light uppercase tracking-wide text-foreground mt-1">
                          {step.title}
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="h-full border-l-4 border-transparent">
                          <div className={`border-l-4 h-full border-dashed border-border ${isEven ? 'mr-4' : 'ml-4'}`} />
                        </div>
                      )}
                    </div>

                    <div className="flex-auto border border-border rounded-lg bg-card">
                      <div className="flex flex-row items-center">
                        <div className="flex-auto">
                          <div className="p-3 font-heading text-sm font-light uppercase tracking-wide text-foreground">
                            {step.title}
                          </div>
                          <div className="px-3 pb-6 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                            {step.description}
                          </div>
                        </div>
                        <div className="w-96 p-5">
                          <img
                            src={stepImages[index]}
                            alt={step.title}
                            className="object-scale-down w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    isEven ? (
                      <div className="flex items-start flex-row">
                        <div className="border-t-4 border-r-4 border-transparent">
                          <div className="w-16 ml-16 h-16 border-l-4 border-dashed border-b-4 rounded-bl-full border-border" />
                        </div>
                        <div className="border-t-4 border-transparent flex-auto">
                          <div className="h-16 border-b-4 border-dashed border-border" />
                        </div>
                        <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-dashed border-t-4 rounded-tr-full border-border" />
                      </div>
                    ) : (
                      <div className="flex items-start flex-row-reverse">
                        <div className="border-t-4 border-l-4 border-transparent">
                          <div className="w-16 mr-16 h-16 border-r-4 border-dashed border-b-4 rounded-br-full border-border" />
                        </div>
                        <div className="border-t-4 border-transparent flex-auto">
                          <div className="h-16 border-b-4 border-dashed border-border" />
                        </div>
                        <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-dashed border-t-4 rounded-tl-full border-border" />
                      </div>
                    )
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
