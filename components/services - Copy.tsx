import { Truck, Package, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "نقل آمن",
      description: "نقل آمن وموثوق لأثاثك مع فريق محترف",
    },
    {
      icon: Package,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية أثاثك أثناء النقل",
    },
    {
      icon: Clock,
      title: "خدمة سريعة",
      description: "نلتزم بالمواعيد والسرعة في إنجاز الخدمة",
    },
    {
      icon: Users,
      title: "فريق احترافي",
      description: "فريق مدرب وذو خبرة في مجال النقل",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">خدماتنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-foreground">{service.title}</h3>
                <p className="text-center text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
