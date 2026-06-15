import type { Programa } from '@/types'

interface Props {
  programa: Programa
}

export function LineasInvestigacionTab({ programa }: Props) {
  if (!programa.lineas_investigacion) {
    return <p className="text-muted-foreground">Próximamente.</p>
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="group">
        <div className="mb-4 pb-2 border-b-2 border-primary/20">
          <h2 className="text-2xl font-semibold text-foreground tracking-tight font-heading">
            Líneas de Investigación
          </h2>
        </div>
        <div className="space-y-3">
          {programa.lineas_investigacion.split('\n').map((item, i) => (
            <div key={i} className="bg-linear-to-r from-primary/5 to-transparent border-l-2 border-primary pl-6 py-2 transition-all duration-200 hover:from-primary/10 hover:border-l-4">
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}