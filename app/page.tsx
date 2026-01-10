export const dynamic = 'force-dynamic'; 

import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Review from "@/components/review";
import CallToAction from "@/components/call-to-action";

import Footer from "@/components/footer";



export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Review />
      <CallToAction />
    

      <Footer />
    </main>
  );
}