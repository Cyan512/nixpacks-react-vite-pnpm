export interface Comunicado {
  slug: string
  title: string
  date: string
  description: string
  content: string
  image: string
  contentImage?: string
  contentImageAlt?: string
  contentImageCaption?: string
  category: string
  author: string
  authorImage?: string
  tags?: string[]
  destacada?: boolean
}

export interface ProgramaCurso {
  semestre: string
  costo_matricula: number
  numero_matriculas: number
  costo_cuota: number
  numero_cuotas: number
}

export interface CursoConRelacion {
  nombre: string
  creditos: number
  categoria: string
  programaCurso: ProgramaCurso
}

export interface Programa {
  slug: string
  title: string
  facultad: string
  duration: string
  modality: string
  description: string
  enConvocatoria: boolean
  image?: string
  objetivo_general?: string
  objetivos_especificos?: string
  perfil_egresado?: string
  cursos?: CursoConRelacion[]
  lineas_investigacion?: string
  content?: string
}

export interface TimelineStep {
  step: number
  title: string
  description: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
