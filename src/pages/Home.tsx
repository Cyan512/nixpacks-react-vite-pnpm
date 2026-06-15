import { HeroSection } from '@/components/home/HeroSection'
import { RectorMessage } from '@/components/home/RectorMessage'
import { AdmissionTimeline } from '@/components/home/AdmissionTimeline'
import { LatestComunicados } from '@/components/home/LatestComunicados'
import { FeaturedPrograms } from '@/components/home/FeaturedPrograms'
import { StudentFAQ } from '@/components/home/StudentFAQ'

export default function Home() {
  return (
    <>
      <HeroSection />
      <RectorMessage />
      <AdmissionTimeline />
      <LatestComunicados />
      <FeaturedPrograms />
      <StudentFAQ />
    </>
  )
}
