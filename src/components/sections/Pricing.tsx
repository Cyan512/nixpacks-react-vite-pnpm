import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: "Perfect for small teams getting started with automation.",
    features: [
      "Up to 5 team members",
      "1,000 workflow runs/mo",
      "10 active workflows",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: "For growing teams that need power and flexibility.",
    popular: true,
    features: [
      "Up to 25 team members",
      "10,000 workflow runs/mo",
      "Unlimited workflows",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Slack & webhook alerts",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 249,
    yearlyPrice: 2490,
    description: "For organizations that need scale, control, and compliance.",
    features: [
      "Unlimited team members",
      "Unlimited workflow runs",
      "Unlimited workflows",
      "Real-time analytics",
      "Dedicated support",
      "SSO & SAML",
      "SOC 2 compliance",
      "Audit logs",
    ],
  },
]

function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="border-t py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight font-medium tracking-tight md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            No hidden fees. No surprises. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          <span className={cn(!annual && "text-foreground font-medium")}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
              annual ? "bg-[oklch(var(--aria))]" : "bg-input"
            )}
          >
            <span
              className={cn(
                "inline-block size-5 rounded-full bg-background shadow-xs transition-transform",
                annual ? "translate-x-5" : "translate-x-0"
              )}
            />
          </button>
          <span className={cn(annual && "text-foreground font-medium")}>
            Annual{" "}
            <span className="text-[oklch(var(--aria))] font-medium">Save 20%</span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-xl border bg-card p-8 transition-all",
                tier.popular &&
                  "border-[oklch(var(--aria)/0.3)] shadow-[0_0_0_1px_oklch(var(--aria)/0.3)]"
              )}
            >
              {tier.popular && (
                <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[oklch(var(--aria))] text-[oklch(var(--aria-foreground))] hover:bg-[oklch(var(--aria))]">
                  Popular
                </Badge>
              )}

              <div>
                <h3 className="text-lg font-medium">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-medium tracking-tight">
                    ${annual ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{annual ? "year" : "month"}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-[oklch(var(--aria))]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={tier.popular ? "default" : "outline"}
                className="mt-8 w-full"
              >
                {tier.popular ? "Start Free Trial" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Pricing }
