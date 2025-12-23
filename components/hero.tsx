import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-16 md:py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">نقل أثاثك بأمان وسهولة</h1>
            <p className="text-lg text-secondary leading-relaxed">
              متخصصون في نقل الأثاث والمنقولات بكل احترافية وأمان. خدمة عملاء متميزة وفريق محترف في المملكة العربية
              السعودية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
  <Button 
    className="bg-primary hover:bg-primary-light text-white font-bold text-base h-12 px-8 w-full sm:w-auto"
  >
    <Link href="/delivery-request">اطلب توصيل الآن</Link>
  </Button>

  <Button
    variant="outline"
    className="border-2 border-primary text-primary hover:bg-primary/5 font-bold text-base h-12 px-8 bg-transparent w-full sm:w-auto"
  >
    <Link href="/about">تعرف علينا أكثر</Link>
  </Button>
</div>
           {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary-light text-white font-bold text-base h-12 px-8">
                <Link href="/delivery-request">اطلب توصيل الآن</Link>
              </Button>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary-light text-white"> 
              <Link href="/delivery-request">اطلب توصيل الآن</Link>
              </Button> 
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-bold text-base h-12 px-8 bg-transparent"
              >
                <Link href="/about">تعرف علينا أكثر</Link>
              </Button>
            </div>
          </div>*/}

          {/* Hero Image */}
          <div className="relative order-1 md:order-2">
            <Image
              src="/images/img-20251202-wa0029.jpg"
              alt="فراس الشرق - نقل الأثاث"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
