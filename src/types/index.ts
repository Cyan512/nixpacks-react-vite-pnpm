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
