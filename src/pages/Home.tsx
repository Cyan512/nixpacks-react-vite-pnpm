import { HeroSection } from '@/components/home/HeroSection'
import { RectorMessage } from '@/components/home/RectorMessage'
import { AdmissionCTA } from '@/components/home/AdmissionCTA'
import { LatestComunicados } from '@/components/home/LatestComunicados'
import { FeaturedPrograms } from '@/components/home/FeaturedPrograms'
import { StudentFAQ } from '@/components/home/StudentFAQ'

export default function Home() {
  return (
    <>
      <HeroSection />
      <RectorMessage />
      <AdmissionCTA />
      <LatestComunicados />
      <FeaturedPrograms />
      <StudentFAQ />
    </>
  )
}
