import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-16 md:py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لنقل أثاثك؟</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">تواصل معنا اليوم واحصل على أفضل خدمة نقل أثاث</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
           <Button className="bg-accent hover:bg-primary-gold text-primary font-bold text-base h-12 px-8">
              <Link href="/delivery-request">اطلب توصيل</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-base h-12 px-8 bg-transparent"
            >
              <Link href="/contact">اتصل بنا</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
