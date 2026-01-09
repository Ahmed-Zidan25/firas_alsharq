// app/page.tsx
export const dynamic = 'force-dynamic'; // This prevents the build-time DB connection error

import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <CallToAction />
      <Footer />
    </main>
  )
}