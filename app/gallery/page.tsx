"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">البوم الصور</h1>
            <p className="text-lg text-white/90">شاهد بعض من أعمالنا الاحترافية</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <GalleryGrid />
        </div>
      </section>

      <Footer />
    </main>
  )
}
