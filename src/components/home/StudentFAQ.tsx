import { ClipboardList, Network, CalendarDays, Signpost, Languages } from 'lucide-react'

const items = [
  {
    id: 1,
    titulo: 'Reglamentos y Normas',
    descripcion:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    icono: <ClipboardList className="h-9 w-9 text-muted-foreground stroke-[1.15]" />,
  },
  {
    id: 2,
    titulo: 'Trámites Académicos',
    descripcion:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    icono: <Network className="h-9 w-9 text-muted-foreground stroke-[1.15]" />,
  },
  {
    id: 3,
    titulo: 'Calendario Académico y de Pagos',
    descripcion:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    icono: <CalendarDays className="h-9 w-9 text-muted-foreground stroke-[1.15]" />,
  },
  {
    id: 4,
    titulo: 'Ruta del Graduado',
    descripcion:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    icono: <Signpost className="h-9 w-9 text-muted-foreground stroke-[1.15]" />,
  },
  {
    id: 5,
    titulo: 'Acreditación del Idioma',
    descripcion:
      'Conoce las disposiciones y lineamientos que rigen la vida académica y garantizan una convivencia respetuosa y ordenada.',
    icono: <Languages className="h-9 w-9 text-muted-foreground stroke-[1.15]" />,
  }
]

export function StudentFAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mb-10">
        <h2 className="font-heading text-3xl font-light uppercase tracking-wide sm:text-4xl">
          Información para el Estudiante
        </h2>
      </div>

      <div className="relative flex flex-col items-start gap-6 lg:flex-row">
        <div className="hidden lg:block lg:h-[720px] lg:w-[54%] lg:overflow-hidden lg:rounded-xl lg:bg-muted lg:shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1544535830-9dff9e0d4bec?auto=format&fit=crop&q=80&w=1000"
            alt="Estatua Académica"
            className="h-full w-full object-cover object-center grayscale-15 contrast-110"
          />
        </div>

        <div className="z-10 w-full rounded-lg border border-border bg-card p-6 shadow-xl sm:p-8 lg:relative lg:-ml-24 lg:mt-16 lg:w-[53%] lg:p-10">
          <p className="mb-10 font-sans text-sm font-light leading-relaxed text-muted-foreground">
            En esta sección encontrarás toda la información esencial para
            organizar y gestionar tu vida académica. Te recomendamos revisarla
            con frecuencia para estar al tanto de fechas importantes y procesos
            administrativos.
          </p>

          <div className="space-y-7">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex items-start gap-5 transition-transform duration-200"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
                  {item.icono}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-heading text-lg font-light uppercase tracking-wide">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
