export const dynamic = 'force-dynamic'; 

import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

// 1. Use a relative path instead of the @ alias
// 2. Rename the local variable to something unique
import ReviewsSection from "./../components/reviews-list";

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
          <h2 className="text-3xl font-bold text-center mb-10 text-black">
            آراء عملائنا
          </h2>
          {/* 3. Wrap in a check to prevent the crash if it's still missing */}
          {typeof ReviewsSection !== 'undefined' ? (
            <ReviewsSection />
          ) : (
            <div className="text-center text-red-500">Component failed to load.</div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}