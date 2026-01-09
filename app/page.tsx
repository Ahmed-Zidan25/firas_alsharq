
export const dynamic = 'force-dynamic'; // This prevents the build-time DB connection error
import ReviewsList from "@/components/reviews-list";
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
	  <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">آراء عملائنا</h2>
          
          {/* 2. استدعاء المكون */}
          <ReviewsList />
          
        </div>
      </section>
      <Footer />
    </main>
  )
}