import type { Programa } from '@/types'

interface Props {
  programa: Programa
}

export function PresentacionTab({ programa }: Props) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {programa.objetivo_general && (
        <section className="group">
          <div className="mb-4 pb-2 border-b-2 border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight font-heading">
              Objetivo General
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base font-light">
            {programa.objetivo_general}
          </p>
        </section>
      )}

      {programa.objetivos_especificos && (
        <section className="group">
          <div className="mb-4 pb-2 border-b-2 border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight font-heading">
              Objetivos Específicos
            </h2>
          </div>
          <div className="space-y-3">
            {programa.objetivos_especificos.split('\n').map((item, i) => (
              <div key={i} className="bg-linear-to-r from-primary/5 to-transparent border-l-2 border-primary pl-6 py-2 transition-all duration-200 hover:from-primary/10 hover:border-l-4">
                <p className="text-muted-foreground leading-relaxed text-base font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {programa.perfil_egresado && (
        <section className="group">
          <div className="mb-4 pb-2 border-b-2 border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight font-heading">
              Perfil del Graduado
            </h2>
          </div>
          <div className="bg-linear-to-r from-primary/5 to-transparent border-l-2 border-primary pl-6 py-4">
            <p className="text-muted-foreground leading-relaxed text-base font-light">
              {programa.perfil_egresado}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}