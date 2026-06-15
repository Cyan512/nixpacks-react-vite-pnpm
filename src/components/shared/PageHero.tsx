import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const defaultImage =
  'https://res.cloudinary.com/ds0tjwccs/image/upload/v1779898731/large_Whats_App_Image_2024_01_24_at_10_38_22_AM_13_1_p3eu3c_569c0d75fb.png'

interface BadgeItem {
  label: string
  variant?: 'default' | 'outline'
}

interface PageHeroAction {
  label: string
  to: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  alt?: string
  badges?: BadgeItem[]
  action?: PageHeroAction
}

export function PageHero({
  title,
  subtitle,
  description,
  image,
  alt,
  badges,
  action,
}: PageHeroProps) {
  const bgImage = image || defaultImage

  return (
    <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden border-b py-24 sm:py-32">
      <img
        src={bgImage}
        alt={alt ?? ''}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 lg:from-background/95 lg:via-background/70 lg:to-background/30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-center lg:text-left">
          {badges && badges.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {badges.map((badge, i) => (
                <Badge
                  key={i}
                  className={
                    badge.variant === 'outline'
                      ? 'font-sans text-xs uppercase tracking-widest'
                      : 'bg-muted/60 font-sans text-xs uppercase tracking-widest text-muted-foreground dark:bg-muted/20'
                  }
                  variant={badge.variant === 'outline' ? 'outline' : 'default'}
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
          <h1 className="font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 font-sans text-lg font-light leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mt-4 font-sans text-base font-light leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {action && (
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Button asChild size="lg">
                <Link
                  to={action.to}
                  className="font-sans text-sm uppercase tracking-widest"
                >
                  {action.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
