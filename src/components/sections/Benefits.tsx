import { Workflow, BarChart3, Puzzle, Shield, Zap, Bell } from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Design complex automations with a drag-and-drop interface. Connect any tool in minutes, not days.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "See exactly how your workflows perform. Monitor execution, spot bottlenecks, and optimize on the fly.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integrations",
    description:
      "Connect with 200+ tools including Slack, Notion, GitHub, and Salesforce. Open API for custom connectors.",
  },
  {
    icon: Zap,
    title: "Smart Triggers",
    description:
      "Automate based on schedules, webhooks, or AI-powered event detection. Your workflows, your rules.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant, end-to-end encryption, and granular access controls. Your data stays yours.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Get notified when workflows fail, succeed, or need attention. Slack, email, SMS — you decide.",
  },
]

function Benefits() {
  return (
    <section id="features" className="border-t py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight font-medium tracking-tight md:text-4xl">
            Everything you need to ship with confidence
          </h2>
          <p className="mt-4 text-muted-foreground">
            Aria gives you the building blocks to automate anything, without
            the complexity.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-xl border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-[oklch(var(--aria-muted))] text-[oklch(var(--aria))]">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { Benefits }
