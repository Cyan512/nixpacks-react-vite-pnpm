import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const heroBg =
  'https://res.cloudinary.com/ds0tjwccs/image/upload/v1779898731/large_Whats_App_Image_2024_01_24_at_10_38_22_AM_13_1_p3eu3c_569c0d75fb.png'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 lg:from-background/95 lg:via-background/70 lg:to-background/30" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
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
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
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
