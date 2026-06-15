import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Benefits } from "@/components/sections/Benefits"
import { Pricing } from "@/components/sections/Pricing"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
