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

export interface Programa {
  slug: string
  title: string
  facultad: string
  duration: string
  modality: string
  description: string
  enConvocatoria: boolean
  image?: string
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
