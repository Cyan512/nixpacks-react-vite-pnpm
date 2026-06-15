export interface Comunicado {
  id: string
  slug: string
  title: string
  date: string
  summary: string
  content: string
  image: string
}

export interface Programa {
  id: string
  slug: string
  tipo: string
  title: string
  description: string
  duration: string
  modality: string
  image: string
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
