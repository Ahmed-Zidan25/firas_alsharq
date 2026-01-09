import Link from 'next/link'
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata, Viewport } from 'next'

// 1. Metadata for SEO
export const metadata: Metadata = {
  title: "404 - الصفحة غير موجودة",
  description: "عذراً، الصفحة التي تبحث عنها غير موجودة.",
}

// 2. Separate Viewport Export (Fixes the warning)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-white py-24">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-3xl font-bold mb-4 text-foreground">عذراً، الصفحة غير موجودة</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            يبدو أن الصفحة التي تحاول الوصول إليها قد تم نقلها أو أنها لم تعد موجودة.
          </p>
          <Link 
            href="/" 
            className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary-light transition-colors"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}