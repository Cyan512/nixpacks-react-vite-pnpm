import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface FilterState {
  search: string
  facultad: string
  modalidad: string
  convocatoria: string
}

interface FilterBarProps {
  facultades: string[]
  onApply: (filters: FilterState) => void
  onClear: () => void
}

const defaultState: FilterState = {
  search: '',
  facultad: '',
  modalidad: '',
  convocatoria: '',
}

export function FilterBar({ facultades, onApply, onClear }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>(defaultState)

  const handleApply = () => {
    onApply(filters)
  }

  const handleClear = () => {
    setFilters(defaultState)
    onClear()
  }

  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar programa..."
            className="pl-8"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>

        <Select
          value={filters.facultad}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, facultad: value }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todas las facultades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las facultades</SelectItem>
            {facultades.map((facultad) => (
              <SelectItem key={facultad} value={facultad}>
                {facultad}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.modalidad}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, modalidad: value }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todas las modalidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las modalidades</SelectItem>
            <SelectItem value="Presencial">Presencial</SelectItem>
            <SelectItem value="Semipresencial">Semipresencial</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.convocatoria}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, convocatoria: value }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Convocatoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="true">En convocatoria</SelectItem>
            <SelectItem value="false">Sin convocatoria</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button
            onClick={handleApply}
            className="flex-1 font-sans text-sm uppercase tracking-widest"
          >
            Aplicar filtros
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="size-8 shrink-0"
            aria-label="Limpiar filtros"
          >
            <X className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
