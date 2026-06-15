import type { Comunicado, Programa } from '@/types'

const API_BASE = '/api'

export async function fetchComunicados(): Promise<Comunicado[]> {
  const response = await fetch(`${API_BASE}/comunicados`)
  return response.json()
}

export async function fetchComunicadoBySlug(slug: string): Promise<Comunicado | null> {
  const response = await fetch(`${API_BASE}/comunicados/${slug}`)
  if (!response.ok) return null
  return response.json()
}

export async function fetchProgramasByTipo(tipo: string): Promise<Programa[]> {
  const response = await fetch(`${API_BASE}/programas?tipo=${tipo}`)
  return response.json()
}

export async function fetchProgramaBySlug(tipo: string, slug: string): Promise<Programa | null> {
  const response = await fetch(`${API_BASE}/programas/${tipo}/${slug}`)
  if (!response.ok) return null
  return response.json()
}
