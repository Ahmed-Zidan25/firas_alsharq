"use client"

import { useState } from "react"
import Image from "next/image"
import { X, PlayCircle } from "lucide-react" // Added Play icon for visual cue

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
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/10.jpeg",
    },
    {
      id: 4,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/11.jpeg",
    },
    {
      id: 5,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/12.jpeg",
    },
    {
      id: 6,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/13.jpeg",
    },
    {
      id: 7,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/14.jpeg",
    },
    {
      id: 8,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/15.jpeg",
    },
    {
      id: 9,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/16.jpeg",
    },
    {
      id: 10,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/17.jpeg",
    },
    {
      id: 11,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/17.jpeg",
    },
    {
      id: 12,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية الأثاث",
      image: "/images/19.jpeg",
    },
     {
      id: 13,
      title: "شاحنات نقل حديثة",
      description: "أسطول معدات حديثة وآمنة",
      image: "/images/img-20251202-wa0021.jpg",
    },


    {
      id: 14,
      title: "فريق النقل المحترف",
      description: "فريقنا المدرب والخبير",
      image: "/images/img-20251202-wa0011.jpg",
    },
    {
      id: 15,
      title: "شاحنات نقل حديثة",
      description: "أسطول معدات حديثة وآمنة",
      image: "/images/img-20251202-wa0021.jpg",
    },
    {
      id: 16,
      title: "خدمة التغليف",
      description: "تغليف احترافي وآمن",
      image: "/images/img-20251207-wa0004.jpg",
    },
    {
      id: 17,
      title: "فرش واستقرار",
      description: "فرش احترافي بعد النقل",
      image: "/images/img-20251207-wa0008.jpg",
    },
    {
      id: 18,
      title: "نقل آمن",
      description: "أثناء عملية النقل الآمن",
      image: "/images/img-20251202-wa0025.jpg",
    },
     { id: 19,
      type: "video", // Identify as video
      title: "نقل أثاث فاخر",
      description: "استخدام الرافعات المتطورة لنقل الأثاث",
      src: "https://2xhg3peni5noax6x.public.blob.vercel-storage.com/Vid1.mp4", // Path to your mp4
      //thumbnail: "/images/img-20251202-wa0009.jpg", // Image to show before play
    },
    { id: 20,
      type: "video", // Identify as video
      title: "نقل أثاث فاخر",
      description: "استخدام الرافعات المتطورة لنقل الأثاث",
      src: "https://2xhg3peni5noax6x.public.blob.vercel-storage.com/Vid2.mp4", // Path to your mp4
      //thumbnail: "/images/img-20251202-wa0009.jpg", // Image to show before play
    },
    { id: 21,
      type: "video", // Identify as video
      title: "نقل أثاث فاخر",
      description: "استخدام الرافعات المتطورة لنقل الأثاث",
      src: "https://2xhg3peni5noax6x.public.blob.vercel-storage.com/Vid3.mp4", // Path to your mp4
      //thumbnail: "/images/img-20251202-wa0009.jpg", // Image to show before play
    },
  ]

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {galleryImages.map((item, index) => (
          <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
            <div className="relative overflow-hidden rounded-lg aspect-video bg-card">
              {item.type === "video" ? (
                <>
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                </>
              ) : (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              )}
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
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
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black z-30 bg-white/80 rounded-full p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-96 bg-black">
              {galleryImages[selectedImage].type === "video" ? (
                <video 
                  src={galleryImages[selectedImage].src} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].title}
                  fill
                  className="w-full h-full object-contain"
                />
              )}
            </div>

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
