interface CursoConRelacion {
  nombre: string
  creditos: number
  categoria: string
  programaCurso: {
    semestre: string
    costo_matricula: number
    numero_matriculas: number
    costo_cuota: number
    numero_cuotas: number
  }
}

interface Props {
  cursos: CursoConRelacion[]
}

const romanMap: Record<string, number> = {
  I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6,
  VII: 7, VIII: 8, IX: 9, X: 10,
};

function parseSemestre(sem: string): number {
  const trimmed = sem.trim()
  if (romanMap[trimmed]) return romanMap[trimmed]
  const num = parseInt(trimmed, 10)
  if (!isNaN(num)) return num
  return Infinity
}

export function MallaCurricularTab({ cursos }: Props) {
  const grouped: Record<string, CursoConRelacion[]> = {}
  cursos.forEach((c) => {
    const sem = c.programaCurso.semestre
    if (!grouped[sem]) grouped[sem] = []
    grouped[sem].push(c)
  })
  const semestres = Object.keys(grouped).sort((a, b) => parseSemestre(a) - parseSemestre(b))

  if (semestres.length === 0) {
    return <p className="text-muted-foreground">Información de malla curricular no disponible.</p>
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {semestres.map((sem) => (
        <section key={sem} className="group">
          <div className="mb-4 pb-2 border-b-2 border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight font-heading capitalize">
              {sem} Semestre
            </h2>
          </div>
          <div className="overflow-x-auto border border-border/40">
            <table className="w-full">
              <thead className="border-b border-border bg-primary/5 hover:bg-primary/5">
                <tr>
                  <th className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case text-left">
                    Nro.
                  </th>
                  <th className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case text-left">
                    Asignatura
                  </th>
                  <th className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case text-left">
                    Créditos
                  </th>
                  <th className="px-6 py-2 font-medium text-primary tracking-tight text-base normal-case text-left">
                    Categoría
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {grouped[sem].map((curso, i) => (
                  <tr key={i} className="transition-colors duration-150 hover:bg-primary/5 border-b-0">
                    <td className="px-6 py-4 text-muted-foreground font-light text-base">
                      {String(i + 1)}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground font-light text-base">
                      {curso.nombre}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground font-light text-base">
                      {curso.creditos}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground font-light text-base">
                      {curso.categoria}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}