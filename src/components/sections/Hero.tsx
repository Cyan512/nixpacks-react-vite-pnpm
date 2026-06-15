import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(var(--aria-muted)),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(var(--aria-muted)),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(var(--aria)/0.08)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[oklch(var(--aria))] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[oklch(var(--aria))]" />
            </span>
            Now in public beta
          </div>

          <h1 className="text-5xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">
            Build workflows at the{" "}
            <span className="bg-gradient-to-r from-[oklch(var(--aria))] to-purple-400 bg-clip-text text-transparent">
              speed of thought
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Aria connects your tools, automates your processes, and lets your
            team focus on what matters. No code required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-11 gap-2 px-6 text-base">
              Start Free Trial
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-11 gap-2 px-6 text-base">
              <Play className="size-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mx-auto mt-12 flex max-w-lg items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {["bg-red-400", "bg-yellow-400", "bg-green-400", "bg-blue-400"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`size-6 rounded-full border-2 border-background ${color}`}
                    />
                  )
                )}
              </div>
              <span>Trusted by 2,000+ teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
