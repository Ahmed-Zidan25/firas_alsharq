// app/page.tsx

import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer";

// CHANGE THIS: Rename 'ReviewsList' to 'ReviewsSection' locally
import ReviewsSection from "@/components/reviews-list"

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
          <h2 className="text-3xl font-bold text-center mb-10 text-black">آراء عملائنا</h2>
          {/* USE THE NEW NAME */}
          <ReviewsSection />
        </div>
      </section>

      <Footer />
    </main>
  );
}