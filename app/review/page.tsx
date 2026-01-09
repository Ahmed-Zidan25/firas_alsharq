import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata, Viewport } from 'next' // Added types

// 1. Correct Metadata Export
export const metadata: Metadata = {
  title: "تواصل معنا - فراس الشرق",
  description: "تواصل معنا للحصول على خدمة نقل أثاث احترافية",
}
// 2. Separate Viewport Export to fix the warning
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function ReviewPage() {
  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">تفضل بترك تعليقك</h1>
      <form action="/api/submit-review" method="POST" className="space-y-4">
        <input name="name" placeholder="الإسم" required className="w-full p-2 border rounded" />
        
        <select name="rating" className="w-full p-2 border rounded">
		  =<option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea name="comment" placeholder="احكي تجربتك معنا" required className="w-full p-2 border rounded h-32" />
        
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          ارسال التعليق
        </button>
      </form>
    </div>
  );
}