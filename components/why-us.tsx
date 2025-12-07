import { CheckCircle } from "lucide-react"

export default function WhyUs() {
  const reasons = [
    "أكثر من 10 سنوات من الخبرة في النقل",
    "فريق محترف وآمن 24/7",
    "أسعار تنافسية وشفافة",
    "رضا العملاء أولويتنا الأولى",
    "تغطية كاملة بالمملكة العربية السعودية",
    "ضمان على جميع الخدمات",
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">لماذا فراس الشرق؟</h2>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
