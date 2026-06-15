import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Escuela de Posgrado
            <span className="mt-2 block text-muted-foreground">
              Universidad Nacional de San Antonio Abad del Cusco
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Formamos líderes e investigadores comprometidos con el desarrollo
            científico, tecnológico y humanístico de la región y el país, a
            través de programas académicos de excelencia.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/comunicados">
                Ver comunicados
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
