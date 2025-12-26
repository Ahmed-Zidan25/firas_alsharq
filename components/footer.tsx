import Link from "next/link"
import SocialMedia from "./social-media"
import Image from "next/image"
import { Phone, MapPin , MessageCircleMore} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/images/Logo.png" alt="فراس الشرق" width={40} height={40} className="h-10 w-auto" />
              <h3 className="text-lg font-bold">فراس الشرق</h3>
            </div>
            <p className="text-sm text-white/80">
              متخصصون في نقل الأثاث والمنقولات بكل احترافية وأمان في المملكة العربية السعودية.
            </p>
             <p className="text-lg font-bold mb-4">تابعنا على وسائل التواصل</p>
            <SocialMedia variant="minimal" />
             <p className="text-sm text-white/80">تواصل معنا عبر منصات التواصل الاجتماعي للحصول على آخر المستجدات والعروض</p>
         
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">الروابط السريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-gold transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-gold transition-colors">
                  عنا
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary-gold transition-colors">
                  البوم الصور
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-gold transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
  <Phone className="w-4 h-4" />
  <a 
    href="tel:+966542100371"
    dir="ltr" 
    className="hover:text-primary-gold transition-colors inline-block"
  >
    +966 54 210 0371
  </a>
</div>
     <div className="flex items-center gap-2">
  <MessageCircleMore className="w-4 h-4" />
  <a 
    href="https://wa.me/966705451313" 
    dir="ltr" 
    className="hover:text-primary-gold transition-colors inline-block"
  >
    +966 54 210 0371
  </a>
</div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                 <p className="text-sm text-white/80">حى المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية</p>
              </div>
      
        </div>
</div>
</div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2025 فراس الشرق - نقل الأثاث. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}