"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      title: "نقل أثاث فاخر",
      description: "نقل أثاث بحذر واحترافية",
      image: "/images/img-20251202-wa0009.jpg",
    },
    {
      id: 2,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/img-20251202-wa0018.jpg",
    },
    {
      id: 3,
      title: "فريق النقل المحترف",
      description: "فريقنا المدرب والخبير",
      image: "/images/img-20251202-wa0011.jpg",
    },
    {
      id: 4,
      title: "شاحنات نقل حديثة",
      description: "أسطول معدات حديثة وآمنة",
      image: "/images/img-20251202-wa0021.jpg",
    },
    {
      id: 5,
      title: "خدمة التغليف",
      description: "تغليف احترافي وآمن",
      image: "/images/img-20251207-wa0004.jpg",
    },
    {
      id: 6,
      title: "فرش واستقرار",
      description: "فرش احترافي بعد النقل",
      image: "/images/img-20251207-wa0008.jpg",
    },
    {
      id: 7,
      title: "نقل آمن",
      description: "أثناء عملية النقل الآمن",
      image: "/images/img-20251202-wa0025.jpg",
    },
  ]

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {galleryImages.map((item, index) => (
          <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
            <div className="relative overflow-hidden rounded-lg aspect-video bg-card">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - Light Box */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary-gold transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative w-full h-96">
              <Image
                src={galleryImages[selectedImage].image || "/placeholder.svg"}
                alt={galleryImages[selectedImage].title}
                fill
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-muted-foreground">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
