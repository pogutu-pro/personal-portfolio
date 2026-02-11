import {
  Hero,
  FeaturedWork,
  About,
  Capabilities,
  ContactCTA,
} from "@/components/sections"
import { Section } from "@/components/layout"
import { FeatureCard } from "@/components/ui"
import { BIO } from "@/data/bio"

export default function HomePage() {
  return (
    <>
      <Hero />

      <About />

      {/* Expertise / Competencies Section */}
      <Section
        id="services"
        title="Full-Stack Technical Proficiency"
        subtitle="Core Competencies"
        variant="default"
        className="bg-gray-50/30 px-4 md:px-6 py-16 md:py-24"
        containerSize="xl"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
          <FeatureCard
            title="Frontend (Web)"
            subtitle="Interaction & UI"
            description="Developing high-performance, accessible web interfaces using the React ecosystem and modern design systems."
            tags={BIO.competencies.frontend}
            index={0}
            accentColor="orange"
            solid={true}
          />
          <FeatureCard
            title="Backend"
            subtitle="Systems & Logic"
            description="Architecting scalable APIs and business logic workflows with FastAPI, Django, and modern ORMs."
            tags={BIO.competencies.backend}
            index={1}
            accentColor="maroon"
            solid={true}
          />
          <FeatureCard
            title="Mobile"
            subtitle="Native & Cross-Platform"
            description="Engineering premium mobile experiences using React Native and the Expo ecosystem for iOS and Android."
            tags={BIO.competencies.mobile}
            index={2}
            accentColor="green"
            solid={true}
          />
          <FeatureCard
            title="Tools & DevOps"
            subtitle="Infrastructure & Deployment"
            description="Managing cloud infrastructure, CI/CD pipelines, and developer workflows for production environments."
            //@ts-ignore - Added devops to BIO.competencies
            tags={BIO.competencies.devops}
            index={3}
            accentColor="blue"
            solid={true}
          />
          <FeatureCard
            title="Testing & Quality"
            subtitle="Reliability & Verification"
            description="Ensuring software stability through comprehensive unit, integration, and end-to-end testing suites."
            //@ts-ignore - Added testing to BIO.competencies
            tags={BIO.competencies.testing}
            index={4}
            accentColor="gold"
            solid={true}
            className="md:col-span-2 lg:col-span-2"
          />
        </div>
      </Section>

      <Capabilities />

      <FeaturedWork />

      <ContactCTA />
    </>
  )
}
