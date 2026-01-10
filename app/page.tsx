// Keep dynamic forcing if you are fetching real-time data
export const dynamic = 'force-dynamic'; 

import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

// 1. FIX: Ensure this path matches your filename exactly (case-sensitive)
// 2. FIX: If your component uses "use client", importing it dynamically 
//    prevents "ReferenceError" during server-side hydration.
import dynamicImport from 'next/dynamic';

const ReviewsList = dynamicImport(() => import("@/components/reviews-list"), {
  ssr: false, // This prevents the 'ReferenceError' during the initial server load
  loading: () => <div className="py-10 text-center">Loading reviews...</div>
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <CallToAction />
      
      {/* Centered Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">
            آراء عملائنا
          </h2>
          <ReviewsList />
        </div>
      </section>

      <Footer />
    </main>
  );
}


      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">آراء عملائنا</h2>
          <ReviewsList />
        </div>
      </section> */}
	 