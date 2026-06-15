import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  { id: 'matricula', question: '¿Cómo realizo mi matrícula?', answer: 'La matrícula se realiza de forma virtual a través del sistema académico institucional. Debes ingresar con tus credenciales, seleccionar los cursos y completar el proceso de registro.' },
  { id: 'pagos', question: '¿Cuáles son los medios de pago disponibles?', answer: 'Puedes realizar tus pagos a través de depósito bancario, transferencia interbancaria o en la ventanilla de tesorería de la universidad. Todos los pagos deben realizarse en los plazos establecidos.' },
  { id: 'certificados', question: '¿Cómo solicito certificados de estudios?', answer: 'Los certificados de estudios se solicitan a través de la secretaría académica. El tiempo de entrega es de 5 días hábiles después de la solicitud y el pago correspondiente.' },
  { id: 'requisitos', question: '¿Cuáles son los requisitos para postular?', answer: 'Los requisitos varían según el programa. Generalmente incluyen: grado académico de bachiller, DNI, currículum vitae, y aprobar el proceso de admisión establecido por la escuela.' },
  { id: 'soporte', question: '¿Cómo accedo al soporte académico?', answer: 'El soporte académico está disponible a través de la oficina de bienestar universitario, tutorías asignadas por programa y la plataforma virtual de aprendizaje.' },
]

export function StudentFAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted/60 lg:aspect-auto lg:h-full dark:bg-muted/20">
          <div className="flex h-full min-h-[300px] items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 text-muted-foreground">
            <span className="font-sans text-xs uppercase tracking-widest">
              Imagen de servicios
            </span>
          </div>
        </div>
        <div>
          <h2 className="font-heading text-3xl font-light uppercase tracking-wide sm:text-4xl">
            Servicios al Estudiante
          </h2>
          <p className="mt-3 font-sans text-base font-light leading-relaxed text-muted-foreground">
            Resolvemos tus dudas sobre los servicios académicos y
            administrativos.
          </p>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
